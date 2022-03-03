package main

import (
	"html/template"
	"os"
)

func main() {
	//t, err := template.New("foo").ParseFiles()
	t, err := template.New("foo").Parse(`{{define "T"}}Hello, {{.}}!{{"output" | printf "%q"}}{{end}}`)
	if err != nil {
		panic(err)
	}
	err = t.ExecuteTemplate(os.Stdout, "T", `123`)
}
