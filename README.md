<a href="https://keshavchawla.com/blog">
<img border="0" alt="KeshavBlog" src="https://blog.keshavchawla.com/static/keshav_mac_animoji-d945f3e8a7833b93ccc55d41714a10d8.jpg" width="140" height="140">
</a>


# [Keshav Chawla - Personal Blog] (https://keshavchawla.com/blog)

This site was built with GatsbyJS and Netlify CMS. The starter template is from [W3Layouts](https://www.gatsbyjs.org/starters/W3Layouts/gatsby-starter-delog/).

* Once you hit "Deploy to Netlify"
* Connect Github
* Enter Repository Name
* And your site starts build process. After the build process your website is live

## Changing repositary URL for Netlify CMS access
You need to change repo URL to your own `repo` at delog/static/admin/config.yml, for example `username/repo-name`

## Creating Github OAuth Client ID
* Goto Github [Developer Settings](https://github.com/settings/developers)
* **New OAuth** 
* Enter Application name
* Homepage URL as Netlify URL
* And **Authorization callback URL** to `https://api.netlify.com/auth/done`)
* Once Client ID and Secret token is generated configure same in [Netlify Access Control](#accessing-netlify-cms-admin) as described.

## Accessing Netlify CMS Admin
* Goto your Netlify site admin
* Goto **Access Control** > **OAuth** then **Install Provider** you need to select provider as `Github` as add `Client ID` and `Secret` 
* Your Netlify CMS is ready. Goto you netlify site URL and append `/admin/`. for example `example.netlify.com/admin/`, You will see login with Github button.

## Managing Blog Posts in Netlify CMS
* Once logged in you will find all the blog post listed here.
* You can create, edit, update and delete like any CMS

## Editing Meta Data

### Upcoming Features Roadmap
