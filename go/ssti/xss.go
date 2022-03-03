package main

import (
	"fmt"
	"html/template"
	"net/http"
)

type User struct {
	ID       int
	Email    string
	Password string
}

func (u User) getPassword() string {
	return u.Password
}

func main() {
	//var user1 = &User{1, "xx@xx.com", "abc#123"}
	var s string
	// r.URL.Query()["q"][0]
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if len(r.URL.Query()["q"]) != 0 {
			s = r.URL.Query()["q"][0]
			fmt.Println(s)
		} else {
			s = "abc"
		}
		// var tmpl = fmt.Sprintf(`
		// {{ define "header" }}
		// <!doctype html>
		// <html lang="en">
		// <head>
		// 	<meta charset="UTF-8">
		// 	<meta name="viewport"
		// 		  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
		// 	<meta http-equiv="X-UA-Compatible" content="ie=edge">
		// 	<title>Email</title>
		// </head>
		// <body>
		// <h2>%s</h2>
		// </body>
		// {{ end }}`, s)
		var tmpl = `
		{{ define "header" }}
		<!doctype html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport"
				  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
			<meta http-equiv="X-UA-Compatible" content="ie=edge">
			<title>Email</title>
		</head>
		<body>
		<h2>{{.}}</h2>
		</body>
		{{ end }}`
		t, err := template.New("page").Parse(tmpl)

		if err != nil {
			fmt.Println(err)
		}

		//t.Execute(w, &user1)
		t.ExecuteTemplate(w, "header", s)
	})
	http.ListenAndServe(":80", nil)
}

// https://blog.takemyhand.xyz/2020/05/ssti-breaking-gos-template-engine-to.html
// payload
// http://127.0.0.1/?q={{define "T1"}}<script>alert(1)</script>{{end}} {{template "T1"}}
// http://127.0.0.1/?q=%3Cscript%3Ealert(1)%3C/script%3E

//根据测试发现，不管有没有define template 都会被xss，感觉不像是模版渲染的问题，有点类似开发使用错误

// 应该是这个文件248行walk方法会对defined template等模版标签绑定不同的处理方法 /opt/homebrew/Cellar/go/1.17.5/libexec/src/text/template/exec.go
