## Version 1.5 ✏️
### 🎁 New Features
#### Trigger on Syntax and Trigger on Shortcut
Markdown Clips will now autosuggest clips using related syntax. For example, typing a right facing chevron `>` will autosuggest block-quote clips and typing a left facing square bracket `[` will autosuggest link clips.

| Clip Group | Keystroke Trigger |
|-----------|-----------|
| Block-quotes     | > |
| Comments         | < |
| Headers          | # |
| Images           | ! |
| Links            | [ |
| Tables           | `|` (Pipe) |

Some keystrokes are protected by Nova and don't trigger autocomplete. For these I've assigned different single character triggers.

| Clip Group | Keystroke Trigger |
|-----------|-----------|
| Code              | § |
| Formatting Tools  | _ (Underscore) |
| Lists             | = |

#### New Clips - Comments
Two additional clips have been added, for in-line and multi-line comments.

### 🛠️ Improvements
#### Improved autosuggest accuracy
Some of the clips have been renamed to improve autosuggest accuracy.


### 👾 Bug Fixes
*Header ID* clip now has a trigger (which was missing before)

## Version 1.4 🎉
### 🎁 New Features

#### New Clips
* Additional Clips for embedding Local and internet video. (Thanks to the [GitLab Markdown Guide](https://about.gitlab.com/handbook/markdown-guide/) documentation for this one).
* An additional Clip for adding collapsible sections to your documents
* An additional Clip for inserting images with URLs

### 🛠️ Improvements
* The extension icon has been updated to fit in a little better with the macOS design language

## Version 1.3 🥳
### 🛠️ Improvements
* A handful of triggers have been changed, to make clip activation more natural with your writing.

  * The keystroke `>` invokes the list of block quote options
  * The keystroke `-` invokes text formatting options
  * The keystroke `|` invokes the list of table options

  You can still bring these up using their descriptive names though. (For example, if you start typing the word *block quote*, the block quote options will appear.)

* The extension app logo has been updated, to be more colourful.

## Version 1.2 🎁
### 🎁 New Features
* Added *Header ID's*. These are useful if you want to generate links directly to headings in resulting HTML markup.

### 🛠️ Improvements
* Commands support for **bold** and *italic* removed, as I've integrated the formatting with the clips. Same power, but easier to wield! ([Repo Issue 1: Format selection with keyboard shortcuts](https://github.com/seanosullivanuk/nova-markdownclips/issues/1)).

## Version 1.1 🪅
### 🎁 New Features
* Bold and italic are now published as Commands, so you can select existing text and change its formatting.
  * You can use the menu, *Editor > Markdown Clips* to do this
  * Alternatively, bind the commands to custom keyboard mappings within *Preferences > Key Bindings > Extensions*)

### 👾 Bug Fixes
* Typing the word *boot* and pressing 'Enter' would replace with a blockquote.

## Version 1.0 🥳

Initial release 🎉