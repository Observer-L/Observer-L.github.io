---
title: 'Crazy Pandaman'
subtitle: 'Meme generator in Python with Face Detection'
date: 2018-12-01 00:00:00
featured_image: 'images/projects/crazypandaman01.png'
---
## What is Crazy Pandaman
Pandaman is one of the most popular memes in China.  
Crazy Pandaman is an app that allows you to make your own pandaman meme.  

### Background and strategic fit
* As the years went on and Facebook was introduced, the popularity of memes started to skyrocket. Soon enough, users of QQ, wechat and other social platforms in China was even creating some "Chinese style" memes about their real-life drama! Fast forward to the present day and you see memes everywhere from Twitter to your wechat moments. Younger generations can’t even remember a time when memes didn’t exist! 
* One of the most famous memes in China is "Pandaman":
![examples](https://github.com/Observer-L/API_ML_AI/raw/master/showcase/examples.png)  
You'll find that the faces are always the same except for the words and actions.  
The fixed template limits our creativity, we want to be creative, we need a tool to create!   
That's the main reason I want to build this app.

### Goals
* I want to create a automatic meme generator that allows you to add custom text and image to make your own pandaman memes.
* to create infinite possibility with a simple app.
* easy come easy go, share your custom memes with friends and have fun!

## What you can do
you can use any static image with face and text as input, the APP will automatically generate a crazy pandaman meme for you!

![demo](https://github.com/Observer-L/API_ML_AI/raw/master/showcase/DEMO.gif)

<p style="text-align:center;"><a href="https://github.com/Observer-L/API_ML_AI/blob/master/src/%5BDEMO%5DPandaman%20Meme%20Generator.ipynb">demo code here</a></p>

## PitchTalk
<iframe src="https://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=6882b04816e863889f51faa3c03bf2e7&tvId=32890562409&accessToken=2.f22860a2479ad60d8da7697274de9346&appKey=3955c3425820435e86d0f4cdfe56f5e7&appId=1368&height=100%&width=100%" frameborder="0" allowfullscreen="true" width="900px" height="600" style="display: block;margin:0 auto;margin-top:20px;"></iframe>

----

## Assumptions
### How can I customize my meme?
* You can use the generator to add text captions to established memes or upload your own images as templates.
* You can move and resize the text boxes by dragging them around.
* You can customize the font color, outline color, and outline width just to the right of where you type your text.
* You can further customize the font and add additional text boxes in the More Options section.

### Why is there a "created by Crazy Pandaman Webapp" watermark on my memes? 
* The watermark helps other people find where the meme was created, so they can make memes too! 
* However, if you'd really like to, you can remove our watermark from all images you create.

----

## Not doing
* provides both free(watermark) and paid features to users
* supports all web fonts and Windows/Mac fonts including bold and italic, if they are installed on your device. Note that Android and other mobile operating systems may support fewer fonts.
* We’ve successfully built the very first part in a program that could be used as an API to generate memes automatically.
By hooking up our program to something like Flask, we could display a web page allowing for users to upload their own images, and get back fully complete memes.  

### Where To Go From Here
We’ve successfully built the very [first part](https://github.com/Observer-L/API_ML_AI/blob/master/src/%5BDEMO%5DPandaman%20Meme%20Generator.ipynb) in a program that could be used as an API to generate memes automatically. By hooking up our program to something like Flask, we could display a web page allowing for users to upload their own images, and get back fully complete memes.  

----

## Manifest // The Tools of Face Detection and APIs
### Dlib
[Dlib](https://github.com/davisking/dlib) is a modern C++ toolkit containing machine learning algorithms and tools for creating complex software in C++ to solve real world problems. In this project, we'll use Dlib’s get_frontal_face_detector, along with the [68 point shape prediction model](https://github.com/davisking/dlib-models).
### APIs
When it comes to sensitive content, we'll use BaiduAI's [Image Censoring API](http://ai.baidu.com/docs#/ImageCensoring-API/top) and [Text Censoring API](http://ai.baidu.com/docs#/TextCensoring-API/top) to handle user's input(both image and text)
