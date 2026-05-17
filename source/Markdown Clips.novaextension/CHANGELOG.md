## Version 1.7
### 🎁 What's New?
#### Shields.io Badges (Labels and Social)
Markdown Clips brings some of the Shields.io magic to Nova, with 13 ready to use badges for labels and social networking. 

Select which badge you'd like from the Clips sidebar or see them automatically suggested as you type. Each of the badges have placeholders for adding your own text, URLs, and for customising colours and badge styles. 

**Examples:**

![Label example](https://img.shields.io/badge/How_cool-is_this-green?style=flat)

![Crowdfunding example](https://img.shields.io/badge/Crowdfund_me-yellow?style=flat&logo=buymeacoffee&logoColor=black&labelColor=white) 

[![YouTube Video Likes example](https://img.shields.io/youtube/likes/dQw4w9WgXcQ?style=for-the-badge)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

You can review the [Shields.io](https://shields.io/badges) documentation to learn more, and to support their project. 

#### An icon refresh
The icon for Markdown Clips has been updated with a Liquid Glass vibe.



## Version 1.6
### 🎁 What's New?
#### GitHub Alerts (GitHub Flavoured Markdown)
Markdown Clips now contains clips for the five GitHub Alert styles; Caution, Important, Note, Tip, and Warning. As always they can be selected from the Clips sidebar, they'll be suggested automatically as you type, and can be triggered using the new `±` keystroke.

#### Collapsable sections (Open and Closed)
Clips for collapsable sections, both open and closed, are now supported. They each contain a line break after the 'summary' for better Markdown formatting support within the section itself.

#### Superscript and Subscript
Two new clips have been added for superscript and subscript.

#### Underlined formatting
For those of you who like to underline text, Markdown Clips now supports the familiar `Cmd+U` keyboard command. The formatting will apply to any selected text too.



## Version 1.5
### 🎁 What's New?
#### Trigger on Syntax and Trigger on Shortcut
Markdown Clips will now autosuggest clips using related syntax. For example, typing a right facing chevron `>` will autosuggest block-quote clips and typing a left facing square bracket `[` will autosuggest link clips.

| Clip Group        | Keystroke Trigger |
|-------------------|-------------------|
| Block-quotes      | >                 |
| Code              | §                 |
| Comments          | <                 |
| Formatting Tools  | _ (Underscore)    |
| GitHub Alerts     | ±                 |
| Headers           | #                 |
| Images            | !                 |
| Links             | [                 |
| Lists             | =                 |
| Tables            | `|` (Pipe)        |

Some keystrokes are protected by Nova and don't trigger autocomplete. For these I've assigned different single character triggers.

#### New Clips - Comments
Two additional clips have been added, for in-line and multi-line comments.

#### Improved autosuggest accuracy
Some of the clips have been renamed to improve autosuggest accuracy.

### 👾 Bug Fixes
*Header ID* clip now has a trigger (which was missing before)



## Version 1.4
### 🎁 What's New?
#### New Clips
* Additional Clips for embedding Local and internet video. (Thanks to the [GitLab Markdown Guide](https://about.gitlab.com/handbook/markdown-guide/) documentation for this one).
* An additional Clip for adding collapsible sections to your documents
* An additional Clip for inserting images with URLs

#### An icon refresh
The extension icon has been updated to fit in a little better with the macOS design language



## Version 1.3
### 🎁 What's New?
#### An icon refresh
The extension app logo has been updated, to be more colourful.

### 🛠️ Changes
#### Keystroke trigger alterations
A handful of triggers have been changed, to make clip activation more natural with your writing.

  * The keystroke `>` invokes the list of block quote options
  * The keystroke `-` invokes text formatting options
  * The keystroke `|` invokes the list of table options

You can still bring these up using their descriptive names though. (For example, if you start typing the word *block quote*, the block quote options will appear.)



## Version 1.2
### 🎁 What's New?
#### Header ID's
Added *Header ID's*. These are useful if you want to generate links directly to headings in resulting HTML markup.

### 🛠️ Changes
#### Commands support has been removed
Commands support for **bold** and *italic* removed, as I've integrated the formatting with the clips. Same power, but easier to wield! ([Repo Issue 1: Format selection with keyboard shortcuts](https://github.com/seanosullivanuk/nova-markdownclips/issues/1)).



## Version 1.1
### 🎁 What's New?
#### Bold and Italic are now Commands
Bold and italic are now published as Commands, so you can select existing text and change its formatting. 

You can use the menu, *Editor > Markdown Clips*, to do this or alternatively bind the commands to custom keyboard mappings within *Preferences > Key Bindings > Extensions*).

### 👾 Bug Fixes
Typing the word *boot* and pressing 'Enter' would replace with a blockquote.



## Version 1.0
Initial release 🎉