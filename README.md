# `polysay`

Speak and translate in different languages from the command line!

1. `brew install mpg123` or your OS equivalent
1. `npm install -g polyglotbot`

## Usage

Specify `--from` or `-f` to specify the default language.

```
$ polysay "Hey there!"
$ polysay -f nl "Welkom!"
```

Use `--to` or `-t` to translate before saying.

```
$ polysay -f en --to nl Hey there, in Dutch
He daar, in het Nederlands
```

Or use `--quiet` or `-q` to just translate text.

```
$ polysay -f en -t nl --quiet Hey there, quietly, in Dutch!
He daar, rustig, in het Nederlands
```