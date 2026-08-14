# Heading 1
## Heading 2
### Heading 3

**Bold Text** or *Italic Text*

- Bullet list item 1
- Bullet list item 2

1. Numbered list item 1
2. Numbered list item 2

[Anchor Text Link](https://visualstudio.com)
![Image Alt Text](path/to/image.png)

> This is a blockquote.

`inline code`

```javascript
// Code block with syntax highlighting
console.log("Hello World");
```
---
***
___

```
echo "# myjscode" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:vendhee/myjscode.git
git push -u origin main
```
```
Global Ignore (For OS-specific junk)

If you want your machine to always ignore files like .DS_Store or Thumbs.db across all repositories on your computer, configure a global ignore file:

git config --global core.excludesfile ~/.gitignore_global
```
```
The Command Line Bypass (Exclude via pathspec)If you want to run an "add all" command but manually skip hidden files in that specific moment, use Git's exclude pathspec feature:

git add . ':(exclude).*'

```
```
If a hidden file was already tracked and committed in the past, adding it to .gitignore later will not stop Git from tracking its changes. To stop tracking a file without deleting it from your local machine, you must manually untrack it first:

git rm --cached .env
```
```
the .gitignore file should absolutely be tracked and committed to your repository.

Tracking the file ensures that every collaborator cloning the project automatically inherits the same rules for ignoring build artifacts, system files, and local
```

