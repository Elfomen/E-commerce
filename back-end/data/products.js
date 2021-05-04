const products = [
    {
        name : 'Smartphone apple iPhone Xs Max 64 Go Argent' , 
        description : 'Place aux grands écrans Un écran Super Retina en deux tailles'
        + 'dont le plus grand écran jamais vu sur iPhone. Un Face ID encore plus rapide. La puce la plus intelligente et la plus puissante jamais intégrée à un smartphone. Et un double appareil photo '
        + 'd’avantâ€‘garde. L’iPhone XS'
         + 'c’est tout ce que vous aimez dans l’iPhone. Poussé à l’extrême' , 
         price : 1032 , 
         countInStock : 68 , 
         imagePath : 'https://www.grosbill.com/mobilite_pda_Smartphone_apple_iPhone_Xs_Max_64_Go_Argent-746492-images800jpg-1.jpg?v=030521074307'
    } , 

    {
        name : 'Iphone 12 Pro max' , 
        description : 'Place aux grands écrans Un écran Super Retina en deux tailles'
        + 'dont le plus grand écran jamais vu sur iPhone. Un Face ID encore plus rapide. La puce la plus intelligente et la plus puissante jamais intégrée à un smartphone. Et un double appareil photo '
        + 'd’avantâ€‘garde. L’iPhone XS'
         + 'c’est tout ce que vous aimez dans l’iPhone. Poussé à l’extrême' , 
         price : 895.99 , 
         countInStock : 22 , 
         imagePath : 'https://www.iclarified.com/images/news/34072/141816/141816-1280.jpg'
    } , 
    {
        name : 'Mac Book 3.0' , 
        description : 'Place aux grands écrans Un écran Super Retina en deux tailles'
        + 'dont le plus grand écran jamais vu sur iPhone. Un Face ID encore plus rapide. La puce la plus intelligente et la plus puissante jamais intégrée à un smartphone. Et un double appareil photo '
        + 'd’avantâ€‘garde. L’iPhone XS'
         + 'c’est tout ce que vous aimez dans l’iPhone. Poussé à l’extrême' , 
         price : 2500.00 , 
         countInStock : 195 , 
         imagePath : 'http://pngimg.com/uploads/macbook/macbook_PNG35.png'
    } , 

    {
        name : 'MacBook Pro 2021 Models' , 
        description : 'ccording to Kuo, Apple is developing two 14-inch and 16-inch models. The new MacBook Pro will feature a flat-edged design, which Kuo describes as “iPhone 12-like” with no curves like current models. It will be the most significant design update for the MacBook Pro of the past five years. Additionally, the new machines will obviously be powered by Apple’s ARM CPU, but Kuo doesn’t share any further ' , 
         price : 2000.00 , 
         countInStock : 195 , 
         imagePath : 'https://techalert24.com/wp-content/uploads/2021/01/MacBook-Pro.jpg'
    } , 
    {
        name : 'MacBook Pro 2021 Models' , 
        description : 'The new MacBook Pro won’t ship for another 2-3 weeks, but members of the media who got their fingers on the new Touch Bar came away from Apple’s event with rave reviews'+

        'Apple hosted a hands-on section after today’s keynote and based on the quick impression the new MacBook Pro made, it looks like Apple has another hit on its hands', 
         price : 2900.99 , 
         countInStock : 15 , 
         imagePath : 'https://cdn.cultofmac.com/wp-content/uploads/2016/10/Hello-Again-New-MacBook-Pro.jpg'
    } , 

    {
        name : 'MacBook Pro 2021 Desktop' , 
        description : 'The new MacBook Pro won’t ship for another 2-3 weeks, but members of the media who got their fingers on the new Touch Bar came away from Apple’s event with rave reviews'+

        'Apple hosted a hands-on section after today’s keynote and based on the quick impression the new MacBook Pro made, it looks like Apple has another hit on its hands', 
         price : 3200.99 , 
         countInStock : 18 , 
         imagePath : 'https://www.macworld.com/wp-content/uploads/2021/03/mac-pro-display-100798260-orig-5.jpg?resize=1024%2C683&quality=50&strip=all'
    } , 

    {
        name : 'MacBook Pro 2021 Desktop' , 
        description : 'The new MacBook Pro won’t ship for another 2-3 weeks, but members of the media who got their fingers on the new Touch Bar came away from Apple’s event with rave reviews'+

        'Apple hosted a hands-on section after today’s keynote and based on the quick impression the new MacBook Pro made, it looks like Apple has another hit on its hands', 
         price : 1100.99 , 
         countInStock : 80 , 
         imagePath : 'https://everymac.com/images/other_images/apple-mac-mini-2010-system.jpg'
    } , 

    {
        name : 'MacBook Pro 2021 Desktop' , 
        description : 'The new MacBook Pro won’t ship for another 2-3 weeks, but members of the media who got their fingers on the new Touch Bar came away from Apple’s event with rave reviews'+

        'Apple hosted a hands-on section after today’s keynote and based on the quick impression the new MacBook Pro made, it looks like Apple has another hit on its hands', 
         price : 1100.99 , 
         countInStock : 80 , 
         imagePath : 'https://everymac.com/images/other_images/apple-mac-mini-2010-system.jpg'
    } , 
    {
        name : 'Play Station 5 Pro' , 
        description : 'A few weeks ago, we reported that PlayStation were fishing for opinions on their upcoming console, the PlayStation 5. A group called PlayStation Voice were apparently sending out emails surveying members of its closed community. At the time, we werent convinced about the legitimacy of the mail, and couldnt find enough information about PlayStation Voice and their connection to PlayStation', 
         price : 900.99 , 
         countInStock : 125 , 
         imagePath : 'https://www.psu.com/wp/wp-content/uploads/2017/12/ps5-768x393.jpg'
    } , 
    {
        name : 'Sony play Station' , 
        description : 'we reported that PlayStation were fishing for opinions on their upcoming console, the PlayStation 5. A group called PlayStation Voice were apparently sending out emails surveying members of its closed community. At the time, we werent convinced about the legitimacy of the mail, and couldnt find enough information about PlayStation Voice and their connection to PlayStation', 
         price : 900.99 , 
         countInStock : 125 , 
         imagePath : 'https://static1.gamerantimages.com/wordpress/wp-content/uploads/2019/12/sony-done-making-handhelds.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5'
    } , 

    {
        name : 'Sony Tablets Pro' , 
        description : 'we reported that PlayStation were fishing for opinions on their upcoming console, the PlayStation 5. A group called PlayStation Voice were apparently sending out emails surveying members of its closed community. At the time, we werent convinced about the legitimacy of the mail, and couldnt find enough information about PlayStation Voice and their connection to PlayStation', 
         price : 1250.99 , 
         countInStock : 125 , 
         imagePath : 'http://pngimg.com/uploads/tablet/tablet_PNG8587.png'
    } , 
    {
        name : 'Samsung Galaxy book' , 
        description : 'we reported that PlayStation were fishing for opinions on their upcoming console, the PlayStation 5. A group called PlayStation Voice were apparently sending out emails surveying members of its closed community. At the time, we werent convinced about the legitimacy of the mail, and couldnt find enough information about PlayStation Voice and their connection to PlayStation', 
         price : 1150.99 , 
         countInStock : 25 , 
         imagePath : 'https://www.kickmobiles.com/images/thumbs/0007995_samsung-galaxy-book-2-in-1-wi-fi-tablet-silver_610.jpeg'
    } , 
    {
        name : 'Sony Smart Watch Pro' , 
        description : 'we reported that PlayStation were fishing for opinions on their upcoming console, the PlayStation 5. A group called PlayStation Voice were apparently sending out emails surveying members of its closed community. At the time, we werent convinced about the legitimacy of the mail, and couldnt find enough information about PlayStation Voice and their connection to PlayStation', 
         price : 450.99 , 
         countInStock : 20 , 
         imagePath : 'https://tse4.mm.bing.net/th?id=OIP.I2S0rosIpLjsvaMjfUki1QAAAA&pid=Api&P=0&w=300&h=300'
    } , 
    {
        name : 'SamSung Smart Watch Pro' , 
        description : 'we reported that PlayStation were fishing for opinions on their upcoming console, the PlayStation 5. A group called PlayStation Voice were apparently sending out emails surveying members of its closed community. At the time, we werent convinced about the legitimacy of the mail, and couldnt find enough information about PlayStation Voice and their connection to PlayStation', 
         price : 450.99 , 
         countInStock : 74 , 
         imagePath : 'https://tse2.mm.bing.net/th?id=OIP.QYF_q3wR8eJaHBgHls7kNgHaHa&pid=Api&P=0&w=300&h=300'
    } , 
    {
        name : 'SamSung Smart Watch Pro' , 
        description : 'we reported that PlayStation were fishing for opinions on their upcoming console, the PlayStation 5. A group called PlayStation Voice were apparently sending out emails surveying members of its closed community. At the time, we werent convinced about the legitimacy of the mail, and couldnt find enough information about PlayStation Voice and their connection to PlayStation', 
         price : 200.99 , 
         countInStock : 50 , 
         imagePath : 'https://tse3.mm.bing.net/th?id=OIP.qtWa6MjCF341GIiqyHNI0QHaHa&pid=Api&P=0&w=300&h=300'
    } , 
    {
        name : 'Smart Lamp' , 
        description : 'we reported that PlayStation were fishing for opinions on their upcoming console, the PlayStation 5. A group called PlayStation Voice were apparently sending out emails surveying members of its closed community. At the time, we werent convinced about the legitimacy of the mail, and couldnt find enough information about PlayStation Voice and their connection to PlayStation', 
         price : 85.99 , 
         countInStock : 50 , 
         imagePath : 'https://tse4.mm.bing.net/th?id=OIP.Y-X3TcaZbrgmOMna0nnMQAHaHa&pid=Api&P=0&w=300&h=300'
    } , 
    {
        name : 'Diamond Lamp' , 
        description : 'we reported that PlayStation were fishing for opinions on their upcoming console, the PlayStation 5. A group called PlayStation Voice were apparently sending out emails surveying members of its closed community. At the time, we werent convinced about the legitimacy of the mail, and couldnt find enough information about PlayStation Voice and their connection to PlayStation', 
         price : 202.99 , 
         countInStock : 50 , 
         imagePath : 'https://tse4.mm.bing.net/th?id=OIP.HQcfVudQna1w0CohEZr9jwHaLH&pid=Api&P=0&w=300&h=300'
    } , 
    {
        name : 'SamSung Galaxy S9 Pro' , 
        description : 'we reported that PlayStation were fishing for opinions on their upcoming console, the PlayStation 5. A group called PlayStation Voice were apparently sending out emails surveying members of its closed community. At the time, we werent convinced about the legitimacy of the mail, and couldnt find enough information about PlayStation Voice and their connection to PlayStation', 
         price : 200.99 , 
         countInStock : 50 , 
         imagePath : 'https://tse1.mm.bing.net/th?id=OIP.YGBk6Cw58OW22JL9X3QzxAHaID&pid=Api&P=0&w=300&h=300'
    }
]

export default products