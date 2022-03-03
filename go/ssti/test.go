package main

import (
	"html/template"
	"os"
)

func main() {
	t, err := template.New("foo").Parse(`{{define "T"}}Hello, {{.}}!{{end}}`)
	if err != nil {
		panic(err)
	}
	err = t.ExecuteTemplate(os.Stdout, "T", "<script>alert('you have been pwned')</script>")
	//t, err := template.New("foo").ParseFiles()
	// t, err := template.New("foo").Parse(`{{define "T"}}Hello, {{.}}!{{end}}`)
	// if err != nil {
	// 	panic(err)
	// }
	// err = t.ExecuteTemplate(os.Stdout, "foo", "<script>alert(1)</script>")
}
