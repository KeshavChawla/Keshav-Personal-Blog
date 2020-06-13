---
template: BlogPost
path: digitally-secure-yourself
date: 2020-06-12T11:30:00.000Z
title: Keeping your online presence more secure
---
Lately, I've had a keen interest in security and finding ways to make my programs, web applications, and digital accounts more secure. In the process, I have revamped my online workflow and found ways to keep my online presence safe.

Here are some of the key takeaways: 

* Your passwords are probably not strong enough
* Most of your online accounts are susceptible to secondary attacks
* You've likely had a hashed password leak

Based on the above, here are some recommendations (many of these might be tips you have heard before but still stand as sound advice) and my security setup. 

1. Create strong passwords

By strong, I *usually* mean passwords that can not be rememberable. The goal should be to have most, if not all, of your passwords made using secure password generators that you will never be able to memorize or enter yourself from memory. When creating your passwords, your goal should be to aim with high entropy, that is, increase the number of **random** uses of different character sets within your password while also increasing in length. The longer, more unique, and random your password is, the better. 

Examples of high entropy passwords (don't use this now obviously):

`bqj0|$K^)4o6V!eBh$Ddx]MQ>t({~[9-M&fp:Pln;}&mU<Q9Y_T~y'Ki>Qw$0uZ`

I should point out in this case when I mention random, I am referring to the use of pseudo-random number generators (PRNGs) but, if possible, make use of true random number generators. (TRNGs). I think random.org has a great article about this and even discusses how they use atmospheric noise to generate truly random numbers https://www.random.org/randomness/.

2. Never ever, absolutely ever re-use passwords 

If you have ever re-used passwords, now is the time to change that. This way, if a password does become exposed, that attack is isolated to one specific point of access or account. This will not only save you time but also provide you with long-term comfort of knowing that you should be alright in times of crisis.

3. Make use of a password manager

This goes along well with point #1. In my opinion, password managers are what allow you to generate and use long strings of passwords that you otherwise would not be able to. Password managers provide some of the convenience of weak memorable passwords but with some added security that comes with stronger passwords.

You can use an online service like 1Password or LastPass, but I'm not a fan of company based password managers. I should point out that there is nothing severely wrong with using such password managers - it's just that I don't feel comfortable giving out my credentials to a private company + paying another monthly subscription.

I prefer to use an open-source password manager like Bitwarden or KeePass, where I can control precisely how my passwords are stored and how they can be decrypted when needed. Yes, I will admit that this is more of an inconvenience that using 1Password or LastPass, but I'm willing to give up some convenience for more peace of mind.

If you are on a Mac and looking for a reliable and secure password manager, I recommend using MacPass, a KeePass-compatible password manager. MacPass is one of the many KeePass password managers, but I find it to have a more current UI than the several other out there.

4. Enable two-factor authentication

Even if someone has your password enabling two-factor authentication on your accounts provides you with a secondary level of defence that prevents your accounts from being compromised.

Depending on your accounts, there may be multiple ways to use 2FA:

* Via a confirmation email
* Via a text message code
* Via authenticator apps like Google Authenticator and Duo Mobile
* Via hardware like a YubiKey
* Via backup codes
* Via security questions
* Via digital certificates

Whatever way(s) you find most convenient enable two-factor authentication on your devices.

5. Before you blindly use a VPN because you were told it was safe, know what you are getting yourself into

Specifically, weigh out the pros and cons of a third party service and, more importantly, the service provider. If done right, VPNs provide a great service and aid in your quest to become digitally secure. I can't entirely agree with all the points here, but this is a great read before you buy into a service: https://gist.github.com/joepie91/5a9909939e6ce7d09e29. As a baseline, I will say this: never trust a free VPN, be suspicious of every claim, and look for a no-logs policy. If something is too good to be true, then it probably is.

Another note about VPNs: be smart about your use. If you use or plan to use a VPN to bypass geographic restrictions or for various other activities, go look elsewhere. I only encourage you to use a VPN to protect secure your traffic and its use on open or hostile networks.

6. Use PGP whenever possible and convenient

I have written about this before, so I'll link my previous blog post on why.

7. Set up alerts for account breaches

Make use of https://haveibeenpwned.com/ to check your email accounts and sign up to get alerts of breaches. Haveibeenpwned will notify you of what specific activity has been comprised and, most times, by which service.

I hope you find all these tips useful.
