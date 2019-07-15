# Plan your stay - responsive travel application
This application is developed for the local tour operator Naturandes Travel. This tour operator specializes in organizing individual tailor-made tours through Peru for the Dutch-speaking market. Previously my local operator, in December 2018 Naturandes Travel purchased the concept, the tours, the goodwill and the website of my former travel company.

This application serves 2 purposes:
1. It helps the user to plan his vacation. The customer can explore the cities he visits during his tour. Using the Google Maps Javascript API, he gains insight into (the location of) the main tourist attractions, hotels in various price ranges, restaurants, and useful addresses (such as the bank, tourist police, or hospital).
2. It enables the tour operator to demonstrate his expertise through a personal, well-considered selection of sights and addresses that deviate from the standard offer of other tour operators and websites such as Tripadvisor or Booking.com. This distinguishes the tour operator from its competitors.

- [**View the website here!**](https://rikduijm.github.io/travel-guide/)
- [**View Website Development in Cloud 9**](https://github.com/RikDuijm/travel-guide)

## Contents table
1. [**UX**](#ux)
    - [The Audience](#audience)
    - [User Stories](#user-stories)
    - [The application](#application)
    - [Content](#content)
    - [User Experience](#user-experience)
    - [Design Ideas](#design-ideas)
    - [Wireframes](#wireframes)
    - [Business Purpose](#business-purpose)

2. [**Functionality and Features**](#features)
    - [Existing Features](#existing-features)
    - [Features Left to Implement](#features-left-to-implement)

3. [**Technologies Used**](#technologies-used)

4. [**Testing**](#testing)
   - [Manual Testing](#manual-testing)
   - [Automated Testing](#automated-testing)
   - [Note for Code Institute](#note)
   
5. [**Deployment**](#deployment)

6. [**Credits**](#credits)
    - [**Contents**](#contents)
    - [**Media**](#media)
    - [**Help with code**](#help-with-code)
    - [**Acknowledgements**](#acknowledgements)

## <a name="ux"></a>UX
### <a name="audience"></a>The Audience
**Who is the target audience?**<br>
The Dutch-speaking customers of this operator choose to have their trip organized by a local, small tour operator instead of the usual Dutch-based travel agencies that offer holidays to many countries. They do this because they want to deviate from the usual journeys, and rely on local specialism. Given the price of the trips, their income is way above average. Generally they are couples, or families with children - almost always double-income households. They have little time to organize the trip and therefore rely heavily on the advice of the operator. They want to see a lot of destinations during their tour. This means that in the cities where they stay during their tour, they have only a short amount of time, normally 2 days or less. They want to spend this at leisure, but well-planned, to get the most out of their time as possible and they expect good suggestions from the operator.

They have a strong interest in culture, charming hotels, local life and love good food. They are looking for secret tips, the gems among the large offer. They want something distinctive, something that displays locality and personality instead of, for example, the clinical hotels or restaurants that one could find in every country in the world.

**What's cultural appropriate for the audience?**<br>
In its suggestions, the site must emenate that the customer is understood / the operator knows who that is. Like this, the client becomes reassured that this is the right tour operator: also having personality and an opinion based upon expertise. This site is no Google, no TripAdvisor or booking.com, with hundreds of addresses and thousands of often very subjective opinions. No, it's from a local specialist with sublime expertise.

### <a name="user-stories"></a>User Stories
**As the touroperator, I would like to distinguish myself from my competition by offering an application that:**<br>
 - helps my client to find a hotel, by making visible where our selected hotels are compared to tourist attractions / restaurants etc.
- inspires (potential) customers, by showing what the destinations have to offer for tourists.
- helps the client understand that we have more expertise and a better service than the competition.
- helps the client once he’s on the destination to see where they are in relation to the places of interest. 

**As a user I’d like to:**<br>
- get the idea that this is a reliable and knowledgeable tour operator. 
- plan my stay quickly by having a handy overview of the most important attractions, without drowning in hundreds of options.
- receive original and personalized suggestions for accommodations, restaurants, and things to do / see.
- choose a hotel quickly based on location, price range, characteristics and the opinion of a knowledgeable travel specialist.
- see where the tourist attractions / restaurants etc. are located in relation to the hotel.
- see where I should go / what I should do in case of an emergency.
- know where I can safely withdraw money.
- see where I am in relation to the places I want to visit.

### <a name="application"></a>The application
**What are we making?**<br>
Given the enormous amount of information that is offered on the Internet, we want to set up a clean, fast and well-arranged application, which gives the customers the opportunity to quickly explore the cities they visit in their tour. They can choose from the hotels selected by the operator, and - with the help of suggestions for tourist attractions, restaurants and practical addresses - plan their time there. They can do this by studying the maps, and reading the description that pops-up with a click on the markers. Because it is a single page application with a mobile first design, only the information that the customer is looking for must be shown. This must be done in as few clicks as possible. With 1 click, the customer must be able to re-start searching / selecting.

With the same thoughts in mind, the maps should only show our suggestions and the street names, perhaps with only the most important landmarks. It must be clean, and stripped of distracting information / addresses.

The customers must also be able to see on the map where they are at that moment (geolocation), so they can navigate to the points of interest using the map. Because the app will be used from any location - for example at home when the user selects a hotel before his vacation - the map should not center on the users position, but on the destination itself. If the users are not at the destination, they therefore will not see their own position. We don't want an aggressive pop-up, asking to share the users position upon loading the website. The user can share his location by clicking on a button, which is a lot less intrusive.

**Why does the user want this?**<br> 
They got to the website to investigate the possibility to reserve a customized journey with this local operator. It's significant that they consider a local operator over one of the big tour companies of their home country (which most people would consider a safer option, mainly because of guarantee over prepayments and legal issues). Basically they are looking for local expertise, customized programs and the feeling they go off the beaten track, but also for having influence over the itinerary.
They lack time and expertise to arrange their trip themselves, so they want a quick presentation of really awesome options, without having to consider many suggestions. 
With this tool we offer the information the user is looking for.

### <a name="content"></a>Content 
**What content type would be relevant?**<br>
Every suggestion must be excellent. In this way the customer can be reassured that this is the specialist that offers quality and he/she can quickly give a meaningful interpretation to the journey - without having to scan a lot of information and read-in night after night. 

Quantity is irrelevant, and it actually has the opposite effect. If one gives suggestions that are proof disappointing, this detracts from customer satisfaction. In addition, the customer has simply no time to process many options. 

Traveling = inspiration and except in the suggestions and descriptions, this must be evoked with beautiful visual material.

### <a name="user-experience"></a>User Experience
**What makes a good user experience?**<br>
- Presenting an easy navigable, comprehensive tool to discover the cities they visit during their journey. 
- To make the experience as pleasant as possible, and prevent that the user has to scroll a lot, only the information that the user selects should show, disappearing once deselected. There should be a connection between a selected item (i.e. restaurant, hotel, tourist attraction, bank) and the marker on the map. So if the user clicks on a certain hotel, in the map an InfoWindow should appear, so that it's at once clear that this is the specific marker / location of the hotel. 
- The idea that this company understand their desire for a local expertise that presents them by presenting them the hidden gems. User should get inspired when using the tool because of the content presented.

### <a name="design-ideas"></a>Design Ideas
The website must be accessible. The user must be able to navigate quickly and intuitively and must easily find all relevant information. Based on those ideas, I made the following choices:

**Font**<br>
I chose the Font 'Roboto', sans-serif because this is a soothing, modern letter. This contributes to the clarity of the page.

**Colours**<br>
I chose soft, light colours and a clear white background. This also contributes to the clarity.

**Content**<br>
Only the content that is requested must be visible. The website is mobile first, and the user should scroll as little as possible. This means that I make other information invisible, but at the same time it can be selected quickly.

By clicking on a button the user can return to the initial screen and select another destination. I have doubted whether I want to reset the complete information / JS values or not. In the end I chose not to do so. If the user returns to a destination that he has already visited before, I think it would be better for him to see the last searched item of that destination.

**Images**<br>
Images are very important for a travel website. They inspire. That is why I chose for large images for the destinations. In addition, the info windows of the tourist attractions and hotels display photos. These too must evoke an inspiring, positive feeling. I find images less relevant for the restaurants. In addition, I have hardly any royalty-free image of the restaurants. I have therefore opted not to work with images for the time being. The same applies to the practical information.

**Maps**<br>
As mentioned before, the maps must be clean an should be stripped of distracting information / addresses. Only the most important landmarks and the street names should be shown, along with our own selected suggestions. It must be clear which marker is a hotel, which a restaurant etc. 

It's important that the map shows all categories (e.g. hotel / point of interest / restaurant) together: the user must understand at once the location / proximity from one place to another to be able to plan a realistic day at leisure. It's also important to see where hotels are situated in relation to restaurants and tourist attractions. So I don't want to show for example only the hotels, but all markers together. Only like this the customer gets an instant idea of distances instead of having to select and deselect categories over and over again.  

I disabled Map Type Control. In my opinion this isn't really a useful control, especially in a city, and since this control is quite big it intervenes with the User Experience, especially on smaller devices. 

I enabled the default disabled Scale Control, since that is very useful when visiting a city: the user has to be able to estimate the distance between the several points of interest.

**InfoWindows**<br>
The texts must be short but informative and inspiring. Images must be added to the tourist attractions and hotels. With hotels, the price range and the most important characteristics must be clear immediately. To show off our personal knowledge, there must be a short and personal review. Also with restaurants the price range and our opinion must be clear. 
At the informative addresses (bank, police, hospital, bus) the level of our personal service must become clear: *"in case of an emergency you can reach us 24 hours a day" / "we only work with the safest bus company in the country."*
 
### <a name="wireframes"></a>Wireframes
This is a mobile first app. I expect the client to use this app mostly on a mobile phone (or tablet) during his visit of the destination. Maybe he uses a bigger device at home (when selecting hotels / doing research), but on holiday most users won’t have a bigger device with them. 

 So the whole design and the choices I made are based on that assumption. I made 3 mobile wireframes: 
- [initial screen](https://raw.githubusercontent.com/RikDuijm/travel-guide/master/user-design-experience/Mock-up%201.jpg)
- [screen after selecting a destination](https://raw.githubusercontent.com/RikDuijm/travel-guide/master/user-design-experience/Mock-up%202.jpg)
- [screen after selecting  a point of interest](https://raw.githubusercontent.com/RikDuijm/travel-guide/master/user-design-experience/Mock-up%203.jpg)

As you can see I made some changes in the design along the way: 
- I chose to add more images (in the initial screen and in the map). 
- I chose to show the categories (hotels, restaurants, etc.) horizontally instead of vertically to minimize the need for scrolling. 
- I chose to only add additional information of the different markers inside the map (not on the page itself), because the information would show twice, the user would have to scroll up and down, and it would only annoy him.

**Larger screens**<br>
The only difference between mobile screen and larger screens is that the different points of interest  (e.g. a list of all the hotels) on larger screens are shown on the left side of the map instead of above the map. Because of this minimal difference I didn’t feel the necessity to create wireframes for larger screens. 


### <a name="business-purpose"></a>Business Purpose
**How's this offering different from competitors and substitutes?**<br>
- Instead of general information and 'sales-language' from big Dutch companies this tool offers inside tips, shows where to find the places we introduce and gives the user the idea we go a step further than other companies in our presentation and service – and that we have the expertise to do this. 
- This application itself shows a strive for professionalism and service towards the clients. No other local company that offers the same kind of customized journeys for the same audience (Dutch speaking clients) has anything like this. 
 
## Functionality and Features
### Existing features
- **Destinations**<br> On the start screen the user sees a short introduction and destinations he can select. This allows him to select the destination of his choice. The page scrolls down and each destination has the following functionalities. 

- **button Verken andere stad (discover other city)**<br>
This button allows the user to return to the start screen. The destination will be hided. This doesn’t reset all the JavaScript functionality. See my earlier explanation in the Design Ideas Section.

- **button Toon mijn locatie (show my location)**<br>
This allows the user to share his location. If the user doesn’t give permission or if the browser doesn’t support this, the user gets a message that the location isn’t received and can click on a link “reload the page”. 
When he gives permission, the location is shown in the map. Since people will use this map also back home, planning their holiday, I decided that the map will not center on the users location (which would be very annoying), but on the tourist destination itself. So the user only sees his own location once he’s at the destination. 

- **Categories Attractions / Hotels / Restaurants / Information**<br>
This allows the user to select the different categories. They have a toggle-functionality. After clicking the user sees a list of our recommendations of that category. 

- **Recommendations**<br> 
Clicking on a recommendation allows the user to see the location on the map and receive more information through an InfoWindow in the map. 

- **Map**<br>
Allows the user to locate the recommendations, see where the recommendations are located from each other and see where he is at this moment. 

- **Markers**<br>
Markers allow the user to read more information about the recommendation. They are customized, so that the user can make the distinction between hotels, restaurants, the police, a hospital, etc.

- **InfoWindows**<br>
Allow the user to read more information about our recommendations. 

- **Walking Route Cusco**<b6r>
Allows the user to follow a suggested walking route through the historic city center of Cusco, covering some of the main tourist attractions. The buttons below the Cusco map allow the user to make the route visible or disappear.

- **Footer**<br>
Allows the user to see the contact details of the tour operator, along with their social media canals. Only the facebook page does actually exist. 

### Features left to Implement 
**Make a Reservation**<br>
An option that allows the user to make a hotel, restaurant, or tour reservation immediately from this page.

**Walking routes**<br>
Walking routes through the city center. Actually I made a small one already, in the city of Cusco. 

**Form for user recommendations**<br>
A form where the user can send his own recommendation(s) of restaurants / activities, so that we can consider 

**What to do in two days?**<br>
A suggested itinerary for 2 days per destination, including activities, restaurants. Authors choice.

## <a name="ux"></a>Technologies Used
- I used HTML, CSS, and JavaScript.

- IDE: I used Cloud9 but was forced to switch to WebStorm since the Cloud9 service of Amazon isn’t very professional. 

- I used Bootstrap for the grid system of the page. 

- Google fonts has been used for the fonts.

- I used Font Awesome for the icons in the footer of the website.

- JQuery was used to simplify hiding and showing content. 

- Google Maps JavaScript API was used to implement the maps and their functionality. 

- Google Chrome developer tools

- Bash / Ubuntu to commit my project and to push it to Github

- Github for version control and for users to view the deployed version of the website.

## <a name="testing"></a>Testing
### <a name="manual-testing"></a>Manual testing<br>
- Responsive testing<br>
The responsiveness of the page was tested 3 times (one time after writing the initial code, then after making several changes, and one time right before the final deployment) locally and on GITHUB pages using Chrome developer tools, in several browsers and devices. Here you can find a specification of the browsers and devices, and the problems encountered and solved.

Safari

- Testing the functionality<br>
At the same moments I also tested the functionality in different browsers. Obviously I already knew the functionality worked in Chrome, since I used Developer Tools while writing the code, so it wasn't a big surprise that the functionality also worked in other browsers. During the second test the maps wouldn't load in Internet Explorer 11. I worked out that this was because of the use of a template literal in the error() function inside the Geolocation function. I fixed this by replacing the template literal for regular quotation marks.  

Safari

- Testing the outgoing links 
All hotel and restaurant suggestions have links to their own websites. I tested them all to make sure all are directed correctly and opening in a new window.

### <a name="automated-testing"></a>Automated Testing
**Validation services**<br>
The following validation services were used to check the validity of my code.

- W3C Markup Validation Service was used to validate HTML.
- W3C CSS validation was used to validate CSS.
- JSHint was used to validate JavaScript.

### <a name="note"></a>Note for Code Institute
After finishing my first Milestone Project I made a complaint that we hadn't had a single lesson about testing our code, but that you expect us to be able to do this. The reply I received:<br>
*I have passed your valuable feedback over to the learning Success Team. I have spoken to someone from the team and they agreed that more information about testing and deployment is due. This is being looked into and in the process of being improved.*

I again made a complaint upon starting this Milestone Project:<br> 
*So far we only got a quick introduction to Jasmine with only 1 specific example. I feel that in the Milestone Projects there's an emphasis on the importance of testing, that isn't reflected in the course and based on this 1 lesson I can't create automated testing for this project.*
 
 The reply I received:<br>
*As far as testing goes, I wouldn't worry too much about doing automated (Jasmine) testing for Google Maps related functions or D3/DC functions. I would recommend doing manual testing though.*

Based on this reply I didn’t do Jasmine testing.

## <a name="deployment"></a>Deployment
The project was built using Cloud9 and – later on – WebStorm. I commited the project en pushed it up to Github using Bash.

To view the deployed version of this project I needed to:
- Log in to Github 
- Select RikDuijm/travel-guide from the list of repositories.
- Select Settings from the navbar near the top of the page.
- Scroll down to where it says Github Pages, there is a subtitle labelled Source, click that and change the source to be master branch.
- The page is automatically refreshed and ready for deployment, it can take up to 5-10 minutes for it to be viewable.

To add this repository to your local workspace:
- Go into your local workspace and open up a new terminal (git bash).
- You have to be inside of the directory that you want to add the cloning to.
- Type git clone,  paste the following URL (https://github.com/RikDuijm/travel-guide.git) and press enter. The process of cloning will now be completed.

## <a name="credits"></a>Credits
### <a name="contents"></a>Contents
All content on this website was written by me, for my former business.
### <a name="media"></a>Media
**Tourist Attraction**<br>
All photos of the tourist attractions were taken by me, with the exception of:  
- city Lima: pixabay.com 
- city of Puno: pixabay.com 
- El Misti & Chachani:pixabay.com 
- Mercado San Camilo: unsplash.com 
- Mercado de San Pedro: unsplash.com

Mentioned websites offer royalty free stock photos.

**Icons on Maps**<br>
The icons for the maps were taken from icons8.com and  are free of use as long as you put a link to the website - which I did in the footer.

**Photos of hotels**<br>
Those photos are from the hotels. Since my former company worked with those hotels and sent them clients on a regular base (as does the company for which I developed this page) I have permission to use those photos.
 
### <a name="help-with-code"></a>Help with code
- The code for the scroll-down function I got from this [page](https://www.daddydesign.com/wordpress/how-to-smoothly-scroll-to-a-specific-element-using-jquery).
- I used the examples on the [Google Maps Javascrip API Tutorial](https://developers.google.com/maps/documentation/javascript/tutorial) to develop the code for my maps. I also searched on Google for other examples, ideas and solutions, but didn't use code of others 1 on 1.  

## <a name="acknowledgements"></a>Acknowledgements
- Thanks to my mentor Spencer Barriball and fellow student Peter Lenting for discussing ideas and providing help on several occasions. 
