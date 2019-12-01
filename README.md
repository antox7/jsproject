## EDIT: Formerly Stop and Frisk, this project now uses Crime Complaint Data instead of S&F data.

## Stop and Frisk!

### Background

Stop and Frisk is a proactive policing practice implemented by New York City Police Department to prevent crime. Theoretically, the law enforcement agents stop anyone whose behaviour seem to be suspicious; they stop the person, ask relevant questions, and potentially search the suspect if they deem necessary. This encounter could lead to an arrest of a suspect given the circumstance.

Overall, the policy is highly scrutinized due to public perception of its alleged racial bias towards minorities and low rates of effectiveness. 

### Features & MPV

+ Features:
    - Illustrate the geo-location of each police stop on the map alongside its outcome (arrest or free to go)
    - Ability to filter data (year, race, ethnicity, gender, age, location of stop)
    - Heatmap of police stops (green for each stop, red-yellow for each arrest)
    - Additional crime related statistics
    
+ Optional feature(s):
    - Graph Number of Stops against Time
    - tbd 

### Wireframes

![Project Image](./assets/images/projectimage.png)

### Architecture and Technologies

+ This project will be implemented with the following technologies: 
    - Javascript for logic
    - D3.js with HTML5 for effects rendering
    - Google Maps API with Google Heatmap for effects rendering

### Implementation Timeline

+ Day 1
    - Install all dependencies / Setup all necessary Node modules
    - Have a running webpack
    - Obtain necessary data (either through an API or CSV)
    - Familiarize with D3
    - Familiarize with Google Maps API
    - Familiarize with Google Heatmap

    Goal: Render something on the window

+ Day 2
    - Show map
    - Load data, understand data, and most importantly be able to manipulate data
    - Figure out how to output data
    - Figure out how to present data based on user enabled filtering paramter(s)

+ Day 3
    - Work on Styling
    - Figure out how to make the illustration dynamic
    - Fix bugs
    - Style again

    
<!--
    A search engine platform that provides user the ability to surf the internet.

<a href="https://wireframe.cc/BFnlTn">Wireframe - click here</a>

Details: 

+ crawler
    - this one does the marathon;
+ reverse indexing
    - reverse k-v pair;
+ page ranking
    - provide relevant search results;
+ stop words
    - a blockade of better user experience;
+ spell check
    - assume the corrected search input;
+ search through synonyms;
+ search output for images;
+ admin dashboard - add / remove root sources for enhanced search results;

-------------------------------------------------

## JS Project

I am currently deciding to choose one of the following topics that I have in mind: 

### (1) 
+  Illustrate the relationship between Crime level and Income per capita, Unemployment rate, and Education. (could add/remove params like education)
    - I have worked with crime stats before so the data is available at borough level for NYC. 

### (2) 
+  Time series analysis between Health issues (like obesity) and Fast Food Stores / Income (per capita.)
    - I have to take a look at the data for Fast Food stores. This one is interesting but I am not quite sure if the data is available in a format that would be useful (i.e. whether data is annual, etc)

<!-- ### (3)
+  This one is freestyling but I was thinking about a web app that has basic i/o. 
    - *input*: food item
    - *output*: nutritional props/cons
    - the ability to compare several foods and be able to pick the one with less harmful content.

+  But I think the overall idea, visually, could be less stylish and therefore not attractive. For some reason, it also feels less challenging. -->

<!-- ### (4)

+  This one is also kind of freestyling and moving away from data visualization but the general idea: 
    - *input*: Enter your name / or any random drawing with your mouse on the window. 
    - *output*: musical tones based on how the drawing interacts with the 'special box' that takes in points and converts them into musical sounds.

### (5)

+ A Search Engine from scratch

(If allowed, this would be my ideal selection)

I had this idea that we had to use JS to build our project.
Hence, I was looking forward to building a basic search engine since
I seem to be really interested into figuring out how it works [bts]. So I spent 
some time reading about 'crawling' and efficient ways to send request to database, etc. 
But I am guessing this is not allowed anymore since it's not really data visualization 
or game to the extent shown in the syllabus?

### (6)

+ Browser History (Visuals)
    - Given Browser History content, illustrate where user spends time (Pie chart)?
    - This one seems really interesting. 
    - But it seems too personal.
    - Seems less challenging. Not sure.

(7) Replicate "What Percent Are You?"

------------------------------------------- -->
