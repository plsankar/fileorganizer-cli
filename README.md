# FileOrganizer CLI

A Simple CLI File Organizer

[![npm version](https://badge.fury.io/js/%40plsankar%2Ffileorganizer.svg)](https://www.npmjs.com/package/@plsankar/fileorganizer)
[![Known Vulnerabilities](https://snyk.io/test/npm/@plsankar/fileorganizer/badge.svg)](https://snyk.io/test/npm/@plsankar/fileorganizer)
[![dependencies](https://david-dm.org/plsankar/fileorganizer-cli.svg)](#)

[![https://nodei.co/npm/@plsankar/fileorganizer.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/@plsankar/fileorganizer.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@plsankar/fileorganizer)

## Install

Install this package gloably from npm repository.

```shell
npm i @plsankar/fileorganizer -g
```

## Usage

Run the cli command in the folder you want to organize.

```shell
fileorganizer <options>
```

## Options

`-d, --date`

Use Date Separation.

`-l, --log`

Generate Log File.

## Config

| Config    | Folder    | Extensions                                                                 |
| --------- | --------- | -------------------------------------------------------------------------- |
| codes     | Codes     | js, jsx, json, ts, tsx, html, htm, xml, xhtml, css, scss, php, sql, md, py |
| images    | Images    | jpg, jpeg, webp, png, gif, jfif, svg                                       |
| videos    | Videos    | mp4, mkv, flv, 3gp, avi                                                    |
| documents | Documents | pdf, rtf, docx, doc, ppt, xlsx, pptx, xls, csv                             |
| archives  | Archives  | rar, zip, 7z, tgz                                                          |
| music     | Music     | mp3, wav                                                                   |
| subtitles | Subtitles | srt, sub                                                                   |
| softwares | Softwares | exe, msi                                                                   |
| android   | Android   | apk                                                                        |

## Contributing

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/plsankar/fileorganizer-cli/issues)

## TODO

-   Add Clean Empty Folder Feature
-   Add Log New Files Locations
