---
layout: post
title:  "How to enable Windows Subsystem for Linux (WSL)"
date:   2025-1-27 12:20:00 -0600
categories: linux
---

#### Introduction
The following tutorial was done with a Windows 11 computer using an x64 processor. These steps may vary depending on your system.

In this tutorial we will learn how to enable WSL which stands for Windows Subsystem for Linux. We will need this to install Linux distro's (distributions for short) in the future. It is recommended that all other apps are closed before beginning this process as your system will need to restart.

Let's begin.

First we need to enable the support for WSL to do this
Press the `Win` key or click your `start menu` and type `turn windows features on or off`
![Image](/assets/images/posts/1-how-to-enable-wsl/1.png)
Press enter or click this. Then check the box next to `Windows Subsystem for Linux` this will be located at the bottom since the folders are in alphabetical order
![Image](/assets/images/posts/1-how-to-enable-wsl/2.png)
Then click `OK` After it has finished applying the changes click the button that says `Restart now`

Once your computer has restarted press the `Win` key or click your `start menu` and type `cmd` 
![Image](/assets/images/posts/1-how-to-enable-wsl/3.png)
Open `Command Prompt`, type `bash` and press enter. 

This will confirm WSL is installed on your computer. 
If you don't return an error the activation was successful!

Congratulations you now have enabled WSL on your computer!