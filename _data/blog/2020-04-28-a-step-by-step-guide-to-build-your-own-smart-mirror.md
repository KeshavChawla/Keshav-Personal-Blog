---
template: BlogPost
path: /magic-mirror-guide
date: 2019-08-08T13:00:00.000Z
title: A Step by Step Guide to Build your own Smart Mirror
thumbnail: /assets/magic.jpeg
metaDescription: A step by step guide to building your own Magic Mirror.
---
![Keshav Magic Mirror](/assets/magic.jpeg "Keshav Magic Mirror")

In July of 2017, I stumbled across [this video](https://youtu.be/sh2EJzplkpM) by Ryan Nelwan where he showcases his custom made touchscreen smart mirror. It immediately inspired me to make my own smart mirror-based off the MagicMirror² platform. This post is my journey through the process and.

![Ryan Nelwan’s Touchscreen “PANL” Mirror](/assets/magic-mirror-panl.png "Ryan Nelwan’s Touchscreen “PANL” Mirror")

**\*Ryan Nelwan’s Touchscreen “PANL” Mirror** Source: <https://youtu.be/sh2EJzplkpM>*

## The Parts

* [A Raspberry Pi 3 B+ or 4](https://www.raspberrypi.org/) (with power supply)
* 8GB+ SD Card & an HDMI CableKeyboard and Mouse
* A two-way mirror (two-way acrylic will also work)
* A monitor/TV (with wall mount)
* [Mini USB Mic](https://www.amazon.ca/dp/B076BC2Y3W/ref=cm_sw_em_r_mt_dp_U_IsQpDbCQV321P)
* USB Extension Cable

![Magic Mirror Close Up](/assets/magic_mirror_close_up.jpeg "Magic Mirror Close Up")

I recommend the Raspberry Pi 3B+ or 4 based on their sheer power and ease of use when installing node dependencies and the MagicMirror² platform. Feel free to use an older Raspberry Pi or the Pi Zero, but expect additional hoops to jump through.

Unquestionably, the hardest item to find to build a MagicMirror is a two-way mirror itself. These mirrors work by being reflective (like a normal mirror) on one side and transparent on the other. “The half-silvered surface will reflect about half the light that strikes its surface while letting the other half go straight through.”¹ I was able to find a large two-way mirror on Kijiji for about $50 and then got it polished and cut at a glass and mirror shop for an additional $20.

The USB microphone and extension cable will come in handy later when we install the Google Assistant. Optional, of course, but well worth the additional hassle.

<hr>

1. ## Setup your Raspberry Pi with the Raspbian OS.

If this is your first time working with a Raspberry Pi I would recommend buying a [kit](https://www.amazon.ca/dp/B07G74KKK4/ref=cm_sw_em_r_mt_dp_U_w0QpDb4ADDAE3) that comes with everything almost ready to go. Otherwise, [follow this tutorial here](https://www.raspberrypi.org/documentation/installation/noobs.md) that will allow you to set up the NOOBS (New Out Of Box Software) OS from which you can select Raspbian to install. Note: Make sure you install the full version of Raspbian **and not** Raspbian Lite.

2. ## Enable SSH on your Raspberry Pi

I should note that this step is optional but if you are like me and find working in Raspbian to be tedious then enabling SSH will make your life a lot easier. See the steps [here to enable SSH and connecting to your primary computer.](https://linuxize.com/post/how-to-enable-ssh-on-raspberry-pi/)

3. ## Use the one line Bash Command

Using the Raspberry Pi terminal or through SSH run the following bash command to go through the full installation.

```vbnet
bash -c "$(curl -sL https://raw.githubusercontent.com/MichMich/MagicMirror/master/installers/raspberry.sh)"
```
