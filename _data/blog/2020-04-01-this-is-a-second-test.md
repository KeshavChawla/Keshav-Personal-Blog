---
template: BlogPost
path: /first-year-at-UW
date: 2020-04-06T13:02:00.000Z
title: 'My First Year at the University of Waterloo: A Recap'
thumbnail: /assets/IMG_2287.JPG
---
> *“But I don’t want to go among mad people,” Alice remarked.\
> “Oh, you can’t help that,” said the Cat: “we’re all mad here. I’m mad. You’re mad.”\
> “How do you know I’m mad?” said Alice.\
> “You must be,” said the Cat, “or you wouldn’t have come here.”*

## ***My first year at the University of Waterloo:***

![UW Orientation Week 2019](/assets/UWOrient1.jpg "UW Orientation Week 2019 https://bit.ly/3e8Nn10")

It's April, classes for the winter have officially ended. While I still have two online exams to write, this will mark the completion of my 1B term as a Computing and Financial Management (CFM) student here at the University of Waterloo. Reflecting back on this past year, I've realized how valuable (and expensive) this last year has been.

UW has pushed me far beyond what I believed was possible. I've had many long nights, stressful assignments, and a (healthy) dosage anxiety-inducing exams. In combination, I've had many laughs, social nights, and successes.

### **Orientation Week**

![UW Orientation Week Dance](/assets/UWOrient2.jpg "The Orientation Math Dance")

Orientation Week is probably the most blissful part of the first year. While not in the itinerary, getting lost around campus, meeting random people, and sporadic nightly games of manhunt all frequently occurred.

Orientation is really just three days of short mini-games and lectures on what to expect for the next four years. The games were fun-ish but the real value of orientation was the social aspect to meet other people in your faculty/program and other undergraduates. I will say, 2019 Math Orientation team names were quite amusing; some of my personal favourites include: Babooleans, Ine-koala-ties, Orangu(sin/cos), mx+bees, and $$/pi$$-ranhas.

### **First Week of Classes**

Probably the easiest week for the rest of my undergrad, but adjusting to Uni life probably made it the hardest. Probably the highlight of this week was attempting (and failing) at solving my first couple of proofs.

### **1A**

#### **Math 135 - Algebra for Honours Mathematics**

I personally didn't like this course until after I finished it. I struggled for the first couple of weeks, trying to grasp my head around different proof techniques. Math 135 taught me how to look at problems from a different perspective. One day, after the first two months, something just clicked, and I was able to grasp the proofs easier than before. My favourite part of this whole course was the unit spent on encoding and decrypting [RSA encryption schemes](https://en.wikipedia.org/wiki/RSA_(cryptosystem)).

#### **Math 137 - Calculus 1 for Honours Mathematics**

My favourite first-year math class, probably because this course was just a thousand delta-epsilon proofs with a couple of crucial proofs and theorems here and there. I found this course to be very similar to grade 12 calculus - perhaps the reason why I found it more relaxed than my other classes.

#### **CS 135 - Designing Functional Programs**

I found CS 135 to be an incredibly interesting course, especially coming into it with prior coding knowledge. Racket, the language used in CS 135, is entirely based on functional programming. That means, no loops only recursion, no variables, and functions are passed first-class values. Racket is so eye-opening as it completely re-invented what I thought about programming.

```scheme
;; Functions as first class values
(define (my-factorial x)
  (cond [(zero? x) 1]
        [else (* x (my-factorial (sub1 x)))]))

(define (my-multiplier x)
  (λ (y) (* x y)))
  
(define multiply-by-3 (my-multiplier 3))
(check-expect (my-factorial 4) 24)
(check-expect (multiply-by-3 (my-factorial 4)) 72)
```

#### **AFM 101 - Introduction to Financial Accounting**

This course was basically a carbon copy of Grade 11 and 12 HS accounting. I found that the work was minimal and menial. Ironically, the one part about the course I did enjoy was the (not testable) general finance knowledge, sometimes discussed in the first 10 minutes of class.

#### **AFM 132 - Introduction to Business Stages**

A course on basic business knowledge, found it be similar to grade 10 HS business. While the course was fundamentals and sleep-inducing, the course staff were great. It was nice to take 132 since it was a stark difference to most of my other classes. Most of the math courses were practice and conceptually heavy, whereas AFM 132 was memorization heavy - I like that balance.

![Hack The North 2019](/assets/HTN-UW.jpg "Hack The North 2019!")

### **1B**

#### **Math 136 - Linear Algebra 1 for Honours Mathematics**

This course started off right where Grade 12 Calculus and Vectors ended off and then quickly ramped up to systems of linear equations, vector spaces, linear maps, and matrices. I loved the content taught but hated the assessments (a common theme I’m finding in most of my courses). My mark definitely did not reflect my enthusiasm, but luckily consistent interest up until the very end did save my mark.

#### **Math 138 - Calculus 2 For Honours Mathematics**

As a continuation of Math 137, I thoroughly enjoyed this course as well. The midterm was not fun, but the rest of the course was. 138 was also the one class in which I only looked at the course notes a handful of times. I found the instructor resources and practice assignments to be great to learn the course content.

#### **CS 136 - Elementary Algorithm Design and Data Abstraction**

A stark difference to CS 135; CS 136 is based on C rather than Racket. I found CS 136 to be more my forte since, unlike Racket, C syntax is very similar to Java. Probably the highlights of this course were discussing memory management, [pointers](https://youtu.be/HSmKiws-4NU), and time complexity. The one thing I noticed is that CS 136 is very much focused on getting terminology and syntactic meaning right: passed vs input and output vs return as two examples.

#### **AFM 102 - Introduction to Managerial Accounting**

I personally like managerial account much more than financial accounting. With 102, I was at least able to see the bigger picture and the applications to managerial accounting. But like with AFM 101, I still found 102 to be my least likeable course this term. I guess I am just not a fan of accounting courses. Luckily, I don't have to take anymore accounting courses for my degree requirements.

#### **AFM 121 - Introduction to Global Financial Markets**

I loved this course! AFM 121 is basically a course that teaches basic excel. The content is probably the most useful/life-applicable course I have taken. The content based on time value of money, RRSPs vs TFSAs, and fixed income securities are things I know I will use for the rest of my life. I was not a fan of the marking scheme, but other than that, I thoroughly enjoyed the course and content.

![Hult Competition](/assets/Grecco3.png "Pitching out venture idea for sustainable & reusable food containers at UW's semi-finals Hult Competition!")

### **Midterms**

I found midterms to be very similar to high school exams. I think of midterms as an excellent litmus test to determine my standing in a course. In all my courses, I found that the rank of my midterm marks, that is, my courses ranked based on my midterm marks from highest to lowest, matched exactly to my courses ranked by final mark. I think this is for two reasons, partially due to the fact that many midterms have substantial weight (15% - 30%), which contributes to the final mark. And secondly, and what I think is more consequential, it’s a good indication of how much of the content you actually know. Even if the latter half of the course, post-midterm, is harder than the first half (which it often is), I believe the midterm is a sound basis to determine your conceptional understanding of the course.

### **Final Exams**

Naturally, the most stressful part of the term but also the most satisfying to finish. Final exams were definitely more challenging than midterms and combined that with the short timeframe from one exam to the next doesn’t make it any better. Final exams are a necessary evil. All I can suggest on this subject is to start preparing early and thoroughly.

#### **The Waterloo Campus**

To put it simply: ugly.\
Well, to give Waterloo credit, some of the buildings are actually quite beautiful.

Buildings like [MC](https://uwaterloo.ca/centre-for-teaching-excellence/sites/ca.centre-for-teaching-excellence/files/styles/body-500px-wide/public/uploads/images/mc_building.png?itok=E7vxl5Cs), RCH, and DP all fall in the last century architecture category. Unfortunately, I also find myself and my classes more commonly in these buildings.

In contrast, the SAF building, DC, and QNC are visually appealing to the eye. I didn’t think the look of a building would have a significant impact on my study habits or my attitude, but after spending hours on end each day in buildings like [MC](https://uwaterloo.ca/centre-for-teaching-excellence/sites/ca.centre-for-teaching-excellence/files/styles/body-500px-wide/public/uploads/images/mc_building.png?itok=E7vxl5Cs), I see the importance of a soothing environment.

#### **Residence**

![CMH Room](/assets/CMH-Room copy.jpg "My room in Claudette Millar Hall (CMH)")

I was lucky enough to get my first choice of residence Claudette Millar Hall (CMH). The building and rooms were gorgeous, and the views I woke up to every day were fantastic (definitely going to miss that). I think the best part of the residence experience was the social aspect. Meeting people in the same faculty makes understanding concepts and learning exponentially easier. In general, having the chance to meet and interact with many individuals made the year go by much quicker.

#### **The CFM Program**

I’ve enjoyed the balance between finance/accounting vs the math/computer science courses. I do enjoy the CS courses more than the finance courses, but I still maintain an interest in both. I do see an added value with the CFM degree as compared to a general CS degree or even the double degree BBA/BCS degree. With CFM, the added value comes in with the small program (easier to put faces to a name), upper-year mentorship, and close community.

#### \[TODO: ADD REST!]

\-----
