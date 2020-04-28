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

Unquestionably, the hardest item to find to build a MagicMirror is a two-way mirror itself. These mirrors work by being reflective (like a normal mirror) on one side and transparent on the other. “The half-silvered surface will reflect about half the light that strikes its surface while letting the other half go straight through.”¹ I was able to find a large two-way mirror on Kijiji for about $$$50 and then got it polished and cut at a glass and mirror shop for an additional $$$$$20.

The USB microphone and extension cable will come in handy later when we install the Google Assistant. Optional, of course, but well worth the additional hassle.

<hr>

## 1. Setup your Raspberry Pi with the Raspbian OS.

If this is your first time working with a Raspberry Pi I would recommend buying a [kit](https://www.amazon.ca/dp/B07G74KKK4/ref=cm_sw_em_r_mt_dp_U_w0QpDb4ADDAE3) that comes with everything almost ready to go. Otherwise, [follow this tutorial here](https://www.raspberrypi.org/documentation/installation/noobs.md) that will allow you to set up the NOOBS (New Out Of Box Software) OS from which you can select Raspbian to install. Note: Make sure you install the full version of Raspbian **and not** Raspbian Lite.

## 2. Enable SSH on your Raspberry Pi

I should note that this step is optional but if you are like me and find working in Raspbian to be tedious then enabling SSH will make your life a lot easier. See the steps [here to enable SSH and connecting to your primary computer.](https://linuxize.com/post/how-to-enable-ssh-on-raspberry-pi/)

## 3. Use the one line Bash Command

Using the Raspberry Pi terminal or through SSH run the following bash command to go through the full installation.

```vbnet
bash -c "$(curl -sL https://raw.githubusercontent.com/MichMich/MagicMirror/master/installers/raspberry.sh)"
```

Alternatively, if you choose to manually install MagicMirror² follow the [README on Github repo](https://github.com/MichMich/MagicMirror#manual-installation) page making sure you have installed Node.js and all necessary dependencies.

## 4. Starting your MagicMirror

In the terminal, navigate to your MagicMirror (`cd MagicMirror`) directory and start (`npm start`). If at this point you see a screen that asks you to create a config file you have done everything correctly so far

![Magic Mirror Start Screen](/assets/mm_start_screen.png "Magic Mirror Start Screen")

***What you should see at this point.***

## 5. Setting up your config.js file

Navigate to this directory (`/home/pi/MagicMirror/config`) and copy the contents of the config.js.sample file and create a new config.js file in the same directory. Depending on your settings there may be some minor modifications that need to be made to your config file. At this point, your MagicMirror² is complete (sort of) and can be run in the same way we did so in step 4.

![Magic Mirror Startup Gif](/assets/mm_gif.gif "Magic Mirror Startup Gif")

## 6. Customizing your mirror

The beauty of the MagicMirror community is all the different add-ons called modules which you can install to your mirror. See the list of [3rd party modules](https://github.com/MichMich/MagicMirror/wiki/3rd-party-modules) and install works best for you.

Here is the list of modules I have installed:

* Clock
* Calendar (synced to my Google Calendar and iCal in live time)
* Current Weather
* Weather Forecast
* News Feed (CBC News RSS feed)
* Compliments
* Hello World
* Alert
* MMM-NowPlayingOnSpotify (displays current song playing on Spotify in live time)
* MMM-GoogleAssistant (turns my mirror into a google assistant)
* MMM-JEOPARDY (cycles through 40 years of Jeopardy questions)
* MMM-TwitterTrendsByPlace (shows the top trending Twitter hashtags in Toronto)

If you want to save yourself some time for including each of these modules in your config file you can copy and paste my Config file. Of course, you will still have to install each module and paste the corresponding API keys if applicable.

```javascript
var config = {
  address: "localhost",
  port: 8080,
  ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  language: "en",
  timeFormat: 12,
  units: "metric",


  modules: [{
      module: "alert",
    },
    {
      module: "updatenotification",
      position: "top_bar"
    },
    {
      module: "clock",
      position: "top_left"
    },
    {
      module: "calendar",
      header: "INSERT CALENDAR NAME HERE",
      position: "top_left",
      config: {
        calendars: [{
          symbol: "calendar-check-o ",
          url: "ADD CALENDAR URL HERE"
        }, ]
      }
    },
    {
      module: "compliments",
      position: "lower_third"
    },
    {
      module: "currentweather",
      position: "top_right",
      config: {
        location: "INSERT HERE",
        locationID: "", //ID from http://www.openweathermap.org/help/city_list.txt
        appid: "ADD YOUR openweathermap.org API key here"
      }
    },
    /* I have disabled this on my mirror for now but may enable in the future
    {
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "INSERT HERE",
				locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "ADD YOUR openweathermap.org API key here"
			}
		},*/
    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [{
          title: "CBC News", // Replace if you don't want CBC Canadian News
          url: "https://rss.cbc.ca/lineup/canada.xml" // Replace if you don't want CBC Canadian News
        }],
        showSourceTitle: true,
        showPublishDate: true
      }
    },
    {
      module: "MMM-NowPlayingOnSpotify",
      position: "bottom_right",

      config: {
        showCoverArt: false,
        clientID: "INSERT HERE",
        clientSecret: "INSERT HERE",
        accessToken: "INSERT HERE",
        refreshToken: "INSERT HERE"
      }
    },

    {
      module: "MMM-GoogleAssistant",
      position: "bottom_left",
      config: {
        maxWidth: "100%",
        header: "",
        publishKey: 'INSERT KEY HERE',
        subscribeKey: 'INSERT KEY HERE',
        updateDelay: 500
      }
    },
    {
      module: 'MMM-JEOPARDY',
      position: 'bottom_left', // Works well anywhere
      config: {
        useHeader: false, // true if you want a header
        header: "This is Jeopardy!", // Any text you want
        maxWidth: "250px", // Stretch or constrain according to region
        animationSpeed: 3000, // New clue fades in and out
      }
    },


    {

      module: 'MMM-TwitterTrendsByPlace',
      position: 'top_left',
      config: {
        // visit the url below for the twitter keys/tokens
        // https://dev.twitter.com/oauth/overview/application-owner-access-tokens
        consumer_key: 'INSERT KEY HERE',
        consumer_secret: 'INSERT KEY HERE',
        access_token_key: 'INSERT KEY HERE',
        access_token_secret: 'INSERT KEY HERE',
        // set the display name/title for the place
        placeName: 'Toronto', // Replace if you are not from Toronto
        // set the woeid for the place, see documentation for more
        // http://woeid.rosselliot.co.nz/lookup/
        placeWoeid: '4118', // Replace if you are not from Toronto (This is the Woeid for Toronto)
      }
    },
  ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = config;
}

```

## Have fun building your mirror!

If you encounter technical issues/facing difficulty head on over to \[MagicMirror Forums](https://forum.magicmirror.builders/)

<hr>

\[1]: [“How do one-way mirrors work?” 12 July 2000.
HowStuffWorks.com.](https://science.howstuffworks.com/question421.htm)
retrieved 27 July 2019
