CREATE TABLE `movie` (
	`title` varchar(255) NOT NULL,
	`description` TEXT NOT NULL,
	`year` int NOT NULL,
	`id` int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`id`)
);

INSERT INTO
	`movie` (`id`, `title`, `description`, `year`)
VALUES
	(
		1,
		"The Seven Samurai",
		"It's the only Japanese film on the list and later was remade as The Magnificent Seven, a Western with Steve McQueen and Charles Bronson.",
		1954
	),
	(
		2,
		"Bonnie and Clyde",
		"One of the films that buried the Hays Code, though today it looks about as risque as basic cable.",
		1967
	),
	(
		3,
		"Reservoir Dogs",
		"It's actually not Tarantino's debut feature; the first film he directed was 1987's My Best Friend's Birthday, much of which was destroyed in a lab",
		1992
	),
	(
		4,
		"Airplane!",
		"The film that forever changed the way people think about Robert Stack, Lloyd Bridges, Peter Graves, Barbara Billingsley and especially Nielsen.",
		1980
	),
	(
		5,
		"Pan's Labyrinth",
		"It's the only Spanish-language movie to make the list.",
		2006
	),
	(
		6,
		"Doctor Zhivago",
		"Peter O'Toole turned down the title role, so Lean settled on another Lawrence of Arabia star, which is how Sharif went from playing an Arab prince to a Russian physician.",
		1965
	),
	(
		7,
		"The Deer Hunter",
		"When John Cazale got sick during filming, the studio wanted to recast, but Streep threatened to walk off the picture if it did.",
		1978
	),
	(
		8,
		"Close Encounters of the Third Kind",
		"John Williams experimented with hundreds of five-note melodies before hitting on just the right impossible-to-forget theme.",
		1977
	),
	(
		9,
		"Up",
		"Pixar has calculated it would take 26.5 million balloons to actually lift the house in the animated feature.",
		2009
	),
	(
		10,
		"Rocky",
		"Stallone wrote the script's first draft in just three days, then refused to sell it unless he was cast in the lead role.",
		1976
	),
	(
		11,
		"Memento",
		"Nolan reportedly was going to cast Alec Baldwin in Pearce's part, but he must have forgotten. ",
		2000
	),
	(
		12,
		"Braveheart",
		"Gibson didn't want to play the lead -- he thought he was too old -- but Paramount wouldn't make the film without him.",
		1995
	),
	(
		13,
		"Slumdog Millionaire",
		"It nearly went straight to DVD but ended up sweeping the Oscars after Fox Searchlight gave it a theatrical release.",
		2008
	),
	(
		14,
		"The Lord of the Rings: The Return of the King",
		"Only one poll respondent claimed to be over 100 years old, and this was one of his top picks. Nice to know Gandalf likes online polls.",
		2003
	),
	(
		15,
		"Beauty and the Beast",
		"It was the first animated film ever nominated for best picture.",
		1991
	),
	(
		16,
		"Seven",
		"The studio wasn't thrilled with the \" head in a box \" ending, but Pitt and Freeman refused to promote the film if it got changed.",
		1995
	),
	(
		17,
		"Inception",
		"Nolan himself is a lucid dreamer, which he has said inspired much of the film.",
		2010
	),
	(
		18,
		"Die Hard",
		"The mini-mart on Olympic Boulevard where Reginald VelJohnson bought Twinkies is now a dry cleaners.",
		1988
	),
	(
		19,
		"The Lord of the Rings: The Fellowship of the Ring",
		"There were many failed attempts at a live-action adaptation of LOTR, dating back to the 1960s, when The Beatles asked Stanley Kubrick to direct a version for them to star in.",
		2001
	),
	(
		20,
		"Amadeus",
		"Hulce practiced piano four hours a day for the role, but the music ended up being dubbed in anyway.",
		1984
	),
	(
		21,
		"On the Waterfront",
		"Contrary to popular belief, Brando's most famous line -- \" I coulda been a contender \" -- was not improvised.",
		1954
	),
	(
		22,
		"Wall-E",
		"The most engaging silent movie since Chaplin left the screen: There's no \" human \" dialogue for the first 40 minutes.",
		2008
	),
	(
		23,
		"12 Angry Men",
		"The last surviving jurist, Jack Klugman, died in 2012.",
		1957
	),
	(
		24,
		"Ghostbusters",
		"In the original script, the Stay Puft Marshmallow Man was just one of 50 monsters, but Reitman estimated it would have cost $300 million to produce them all.",
		1984
	),
	(
		25,
		"Brokeback Mountain",
		"Lee won best director, but in one of the biggest Oscar upsets in recent memory, Brokeback lost best picture to … see if you can remember.",
		2005
	),
	(
		26,
		"The Bridge on the River Kwai",
		"Pierre Boulle, who wrote the 1952 French novel on which the movie is based, also wrote Planet of the Apes.",
		1957
	),
	(
		27,
		"Blazing Saddles",
		"Brooks offered John Wayne a part in the film, but the Duke declined.",
		1974
	),
	(
		28,
		"All the President's Men",
		"Pakula was so intent on re-creating the Washington Post newsroom, he had the paper's trash shipped to Hollywood to clutter desks on the set.",
		1976
	),
	(
		29,
		"Young Frankenstein",
		"Wilder suggested the idea for the movie to Brooks while they were filming Blazing Saddles, which is why Wilder's name is first in the writing credits.",
		1974
	),
	(
		30,
		"Almost Famous",
		"One of Hoffman's most beloved performances -- and he delivered the whole thing while suffering from the flu.",
		2000
	),
	(
		31,
		"Vertigo",
		"The No. 1 film in the most recent Sight & Sound critics' poll (2012) has a ways to go on this list.",
		1958
	),
	(
		32,
		"Gladiator",
		"It was Crowe's big entrance as a Hollywood star (he won an Oscar) and Reed's big exit (he suffered a fatal heart attack during filming).",
		2000
	),
	(
		33,
		"Monty Python and The Holy Grail",
		"The original script was set half in the Middle Ages, half in the 20th century until Jones suggested doing the King Arthur story.",
		1975
	),
	(
		34,
		"Avatar",
		"It's the highest grosser of all time, which explains the three sequels that will start rolling out in December 2016.",
		2009
	),
	(
		35,
		"The Lion King",
		"It was the top-grossing animated film until Toy Story 3 passed it in 2010 and then Frozen topped them both.",
		1994
	),
	(
		36,
		"Raging Bull",
		"Scorsese used chocolate as blood in the boxing scenes because it showed up better in black and white. That explains how De Niro gained 70 pounds.",
		1980
	),
	(
		37,
		"Mary Poppins",
		"Andrews did the film because she lost My Fair Lady to Audrey Hepburn. But Andrews got the last laugh: She won the Oscar.",
		1964
	),
	(
		38,
		"Groundhog Day",
		"Murray reportedly was bitten by the groundhog twice during shooting. Why isn't that on the DVD extras?",
		1993
	),
	(
		39,
		"North by Northwest",
		"Martin Landau's character was secretly gay, at least according to Landau, who claimed it made more sense for the plot.",
		1959
	),
	(
		40,
		"West Side Story",
		"\"The beautiful thing about the evening was that we went together,\" recalls Chakiris of the night he and Moreno picked up Oscars for their performances as Bernardo and Anita in West Side Story. \"My category was called first, and I got lucky. And then Rita got lucky. What a perfect night.\" Moreno recalls it slightly differently. \"By the time my category came up, it was very late. I had to wait a long time. At that point, West Side Story had swept the awards, and I thought, ‘My Puerto Rican luck; I’ll be the only one who doesn’t get an award.’\" When her name was called, she walked to the podium and delivered one of the briefest speeches ever for an Oscar. \"I don’t believe it. Good Lord. I leave you with that.\" Says Moreno: \"I was not ready to win. I had nothing planned.\"",
		1961
	),
	(
		41,
		"Amelie",
		"The only French film to make it into the top 100, thanks mostly to under-20s (it was that group's sixth-favorite film).",
		2001
	),
	(
		42,
		"Thelma & Louise",
		"\"I thought of it as a cowboy movie with women instead of guys,\" says Sarandon of her role in Ridley Scott’s 1991 groundbreaking female-bonding road movie. \"It was pretty shocking that people were so threatened by it. Like somehow we had backed into territory long held only by white heterosexual men of a certain age.\" Davis doesn’t disagree — \"I don’t think any of us knew it would strike a nerve the way it did,\" she says — but savors different memories of making the movie, including getting paired with an unknown young actor during his tryout for a key role. \"I read with Brad Pitt,\" she recalls. \"But I got a little distracted during the scene. I was forgetting my lines. I was like, ‘I’m totally screwing up this kid’s audition.’ \" It didn’t get any easier after Pitt, then 28, got the part. \"Ridley is really into the look of things,\" says Davis, \"so he was spraying Evian on Brad’s stomach during the shots. I was like, ‘Hello!’ \" — Stacy Wilson",
		1991
	),
	(
		43,
		"Sunset Blvd.",
		"Directors, editors and writers like it most. Everybody else taking the poll still can't get over the fact that it's narrated by a dead guy.",
		1950
	),
	(
		44,
		"The Dark Knight",
		"Ledger took the Joker very seriously, even applying his own face paint before each shot.",
		2008
	),
	(
		45,
		"Eternal Sunshine of the Spotless Mind",
		"The film helped revive Winslet's career by proving she could do (quirky) comedy. \" It took me right away from that English period - film thing and put me in the U.S.market, \" she recently told THR.",
		2004
	),
	(
		46,
		"Taxi Driver",
		"Screenwriter Paul Schrader was inspired by the diaries of Arthur Bremer, who shot George Wallace, and Scorsese turned to Psycho composer Bernard Herrmann, who initially turned down the job (\" I don 't write music for car movies\").",
		1976
	),
	(
		47,
		"Butch Cassidy and the Sundance Kid",
		"In real life, Cassidy' s gang was called The Wild Bunch, but Hill changed it to \" Hole in the Wall \" to avoid confusion with the Sam Peckinpah film.",
		1969
	),
	(
		48,
		" Good Will Hunting ",
		" Terrence Malick suggested the bittersweet ending ( in the original version, Damon and Driver drive off into the sunset).",
		1997
	),
	(
		49,
		" All About Eve ",
		" It got 14 Oscar nominations, a record that stood until it was tied by Titanic 47 years later.",
		1950
	),
	(
		50,
		" The Big Lebowski ",
		" The Dude was inspired by film promoter Jeff Dowd,
		who helped secure distribution for the Coen brothers ' first film, Blood Simple.",
		1998
	),
	(
		51,
		"Jurassic Park",
		"There was a four-way bidding war for Michael Crichton' s novel: Warner Bros.wanted it for Tim Burton, Fox liked it for Joe Dante, Columbia chased it for Richard Donner, but Universal won for Spielberg.",
		1993
	),
	(
		52,
		" Rear Window ",
		" It 's the only movie in which you can watch Kelly smoke a cigarette -- if you' re into that sort of thing.",
		1954
	),
	(
		53,
		" The Usual Suspects ",
		"\" Who is Keyser Soze ? \" was the question that drove the summer of 1995.Shot on a $ 6 million budget, Singer 's breakthrough crime thriller would win Oscars for Spacey and screenwriter Christopher McQuarrie.",
		1995
	),
	(
		54,
		"Some Like It Hot",
		"\" Everybody quotes me as saying kissing Marilyn was like kissing Hitler, \" Curtis told a reporter a few years before his death. \" I never said that.I said that kissing Marilyn was like f --ing her, the way she would grind against me.\"",
		1959
	),
	(
		55,
		"Saving Private Ryan",
		"Spielberg used real amputees wearing prosthetics to simulate soldiers losing their limbs during the opening Omaha Beach battle scene.",
		1998
	),
	(
		56,
		"Titanic",
		"Both were the biggest of their day (882 feet for the vessel; $200 million for the film). But the boat sank, while the film went on to become the second-largest grosser in history (after Avatar).",
		1997
	),
	(
		57,
		"The Matrix",
		"A virtual-reality prison. Sentient computer programs. Downloadable abilities. Bullet-time. Whoa. No wonder it was the first DVD to sell a million copies.",
		1999
	),
	(
		58,
		"Toy Story",
		"Each CGI frame took from four to 13 hours to render, nearly as long as the last iPhone update.",
		1995
	),
	(
		59,
		"Alien",
		"When they shot the film' s most famous scene -- the alien bursting through Hurt's chest -- the filmmakers didn't tell the cast what would happen. The horror on their faces is real.",
		1979
	),
	(
		60,
		"Psycho",
		"Hitch's serial killer thriller was a shocker -- but not just because of the shower scene. It was the first film to show a toilet.",
		1960
	),
	(
		61,
		"Fight Club",
		"Bonham Carter's line after her sex scene with Pitt -- \" That was the best f -- I've had since grade school\" -- was a replacement. The original, more offensive line: \"I want to have your abortion.\"",
		1999
	),
	(
		62,
		"The Shining",
		"Kubrick realized that the shot of Nicholson repeatedly typing \" All work and no play makes Jack a dull boy \" would make no sense to European audiences, so he had the line typed in Italian, German and Spanish.",
		1980
	),
	(
		63,
		"When Harry Met Sally",
		"Talk about great acting. According to sources on the set, Crystal and Ryan hated each other's guts. (Although Crystal denies it, saying he and Ryan had a great working relationship.)",
		1989
	),
	(
		64,
		"Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
		"Sellers was the first actor to be nominated for a single Oscar for playing three characters (he lost on all three counts to Rex Harrison in My Fair Lady).",
		1964
	),
	(
		65,
		"Ferris Bueller's Day Off",
		"Hughes paid homage to his earlier movies via the license plates on the characters' cars: \" VCATION \" for National Lampoon's Vacation, \" MMOM \" for Mr. Mom and \" TBC \" for The Breakfast Club.",
		1986
	),
	(
		66,
		"A Clockwork Orange",
		"It's the film that began the debate over violence in cinema. Kubrick was so horrified by a copycat murder in England that he pulled the movie from U.K. theaters.",
		1971
	),
	(
		67,
		"American Beauty",
		"Chevy Chase, Kevin Costner, and John Travolta all reportedly were considered for the part of Lester Burnham (which, incidentally, is an anagram for \" Humbert learns, \" one of the film's many hat tips to Lolita).",
		1999
	),
	(
		68,
		"Fargo",
		"This is one of four films on the list to have inspired hit TV shows that are current Emmy contenders. The other shows are Bonnie and Clyde, Hannibal and Bates Motel.",
		1996
	),
	(
		69,
		"The Empire Strikes Back",
		"An almost Shakespearean tragedy. The hero loses a hand but gains a father. And his best friend is frozen solid. Try and imagine the second installment of another giant sci-fi franchise that ends on such a downer. Go ahead.",
		1980
	),
	(
		70,
		"The Princess Bride",
		"Hardly anyone saw Rob Reiner's adaptation of William Goldman's comic-fantasy novel in theaters. But this was back when video could create a cult hit -- and that's precisely what happened.",
		1987
	),
	(
		71,
		"One Flew Over the Cuckoo's Nest",
		"Kirk Douglas optioned Ken Kesey's book in the early '60s but decided he was too old to play McMurphy, so he gave the rights to his son, Michael, who produced it instead.",
		1975
	),
	(
		72,
		"Blade Runner",
		"Despite studio tinkering (adding a voiceover, slapping in aerial footage shot for Kubrick's The Shining to give the ending a sunny feel), it remains the ultimate noir, sci-fi detective movie.",
		1982
	),
	(
		73,
		"The Graduate",
		"Which of these actresses was not considered for Mrs. Robinson: Deborah Kerr, Judy Garland, Lana Turner, Rita Hayworth, Doris Day, Shelley Winters, Ava Gardner, Patricia Neal or Ingrid Bergman? Trick question: All supposedly were up for the part.",
		1967
	),
	(
		74,
		"The Breakfast Club",
		"More proof that men and women are different: Hughes' after-school detention drama was the ninth most-popular film for female respondents, but 75th for males.",
		1985
	),
	(
		75,
		"Singin' in the Rain",
		"Reynolds once said that making this film and giving birth were the two hardest things she'd ever done. Kelly reportedly was a tyrant on the set.",
		1952
	),
	(
		76,
		"The Sound of Music",
		"Such a cheery spirit-lifter, during the Cold War the BBC reportedly planned to air the film after a nuclear strike to improve the morale of survivors. \" So Long, Farewell \" being the perfect post-apocalyptic melody.",
		1965
	),
	(
		77,
		"Jaws",
		"The original summer blockbuster. It cost only $9 million to make and grossed nearly as much its first weekend alone. And yet … the shark still looks fake.",
		1975
	),
	(
		78,
		"Lawrence of Arabia",
		"Steven Spielberg once estimated that remaking it today would cost close to $300 million. Also, these days, they'd probably need to add some estrogen; the 227-minute movie has not a single line spoken by a woman.",
		1962
	),
	(
		79,
		"The Silence of the Lambs",
		"The only horror film ever to win best picture. It also won best director, adapted screenplay, actress and actor (for Hopkins' 25-minute turn, the second-shortest performance to win that trophy behind Peter Finch's in Network).",
		1991
	),
	(
		80,
		"Chinatown",
		"This is the first of three Nicholson films to make the 100. But he's beaten by Robert Duvall and Robert De Niro (both with four) and by Marlon Brando and Harrison Ford (with five apiece).",
		1974
	),
	(
		81,
		"It's a Wonderful Life",
		"It was Capra's favorite, and Stewart's, too, but it bombed when it first was released. Like George Bailey, though, it got a second chance, becoming a holiday classic thanks to endless Christmas TV showings.",
		1946
	),
	(
		82,
		"Goodfellas",
		"Scorsese's first film on this list is remembered for many things (like Pesci's \" You think I 'm funny?\" riff), but it made the record books by dropping the F-bomb more than any other movie up till then (300 times). It was surpassed last year by The Wolf of Wall Street, which used the F-word 569 times.",
		1990
	),
	(
		83,
		"Annie Hall",
		"For years there have been rumors of a bootleg cut of an original, much longer version -- titled Anhedonia -- which supposedly was more of a surreal murder mystery than a love story. Please let THR know if you' ve got a copy.",
		1977
	),
	(
		84,
		" Apocalypse Now ",
		" Harvey Keitel got fired.Brando showed up overweight and unprepared.Sheen had a heart attack and nearly died. And storms destroyed many of the sets.Has a better film ever been made from worse circumstances ? ",
		1979
	),
	(
		85,
		" To Kill a Mockingbird ",
		" More than 50 years later, this is still a pitch - perfect portrait of race and rural America during the Great Depression.No wonder it 's Superman' s favorite movie ( according to Clark Kent 's Wikipedia page, at any rate).",
		1962
	),
	(
		86,
		"Gone With the Wind",
		"It' s still the longest film to win best picture (nearly four hours) and the first to have an African - American cast member win an Oscar (Hattie McDaniel).Ironically, its only surviving star is Olivia de Havilland, 97, whose character was the main one to die.",
		1939
	),
	(
		87,
		" Forrest Gump ",
		" The mind - blowing CGI -- from the floating feather to removing Sinise's legs -- helped put Gump over the top in one of the most competitive best picture races in memory. The Shawshank Redemption (No. 4) and Pulp Fiction (No. 5) also were nominated that year.",
		1994
	),
	(
		88,
		"Raiders of the Lost Ark",
		"Dreamed up while George Lucas and Spielberg were vacationing in Hawaii, Raiders indulged Lucas' desire to make an old-fashioned serial and scratched Spielberg's itch to make a globe-trotting James Bond film (incredibly, the 007 producers had turned down his services). When Jeff Bridges said no to the role of Indiana Jones (initially named Smith) and Tom Selleck couldn't get out of his Magnum P.I. contract, Lucas turned to his Han Solo.",
		1981
	),
	(
		89,
		"Back to the Future",
		"Fox was filming Family Ties when Zemeckis tapped the 24-year-old television star to play unwitting time traveler Marty McFly. (He was replacing Eric Stoltz, who had shot a few scenes but proved the wrong fit.) Fox worked nights and weekends, which explains why he looks so exasperated in most of the film.",
		1985
	),
	(
		90,
		"Star Wars",
		"Star Wars set the bar for lots of things: special effects, box-office receipts, the incorporation of mythological storytelling structure, the number of aliens that can fit comfortably into a bar. But its real legacy is The Deal: Lucas negotiated rights to both the merchandising and the sequels -- deemed worthless by Fox in 1977, but today they are worth billions.",
		1977
	),
	(
		91,
		"Schindler's List",
		"The most shocking thing about this emotionally wrenching black-and-white drama isn't that it's about an act of heartbreaking kindness during the Holocaust; it's that Spielberg released it only months after his other big hit of 1993, the one with the dinosaurs. Unlike Jurassic Park, this film took home seven Oscars, including best director and best picture (the first black-and-white movie to win that statuette since 1960's The Apartment).",
		1993
	),
	(
		92,
		"2001: A Space Odyssey",
		"It was the first outer-space movie to take outer space -- and special effects -- seriously (so seriously Kubrick had the sets destroyed after production to make sure they didn't turn up in subsequent inferior sci-fi films). Sure, it creaks beside its successors, including Close Encounters and Star Wars, but 2001 does have one of the most famous match-cuts in movie history (the bone turning into a spaceship). And even though the smooth-talking computer in the film has an operating system that's 46 years old, people still want to own it: The HAL 9000 app on iTunes has been downloaded an estimated quarter-million times.",
		1968
	),
	(
		93,
		"E.T. The Extra-Terrestrial",
		"It's the first Spielberg film on the list but hardly the last (he has seven). And it totally makes sense that E.T. would be his most popular because it's basically The Wizard of Oz in reverse. Think about it: A 3-foot-tall munchkin lands on Earth, where he's befriended by a trio of locals (and their little dog) who help him phone to no-place-like-home until, at the end, where does E.T. go in his spaceship? That's right -- over the rainbow. \" I never thought of that before, \" said Spielberg a few years ago when the theory was presented to him. \" Do you mind if I steal that ? \"",
		1982
	),
	(
		94,
		"The Godfather: Part II",
		"Arguments over which Godfather is greater, the first or second, began as soon as the sequel was released. The first film has the edge among this poll's respondents, but Part II has die-hard fans as well. \" It 's one of those movies,\" says producer Albert Berger, \"that has every element of cinema working at the highest level. And it' s entertaining, and it says something about our country.\"",
		1974
	),
	(
		95,
		"Casablanca",
		"Not surprisingly, Rick and Ilsa's war-torn romance was a big favorite among seasoned poll respondents. Among those in their 60s, it was the third-most-popular picture, while among those in their 20s, it was 37th. Also not a big shocker, men and women had different opinions: Casablanca was males' third-favorite film and females' 14th. But then, men always prefer their love stories with Nazis in them.",
		1942
	),
	(
		96,
		"Pulp Fiction",
		"\" Quentin has always been a student of film, and after Reservoir Dogs he said to me: 'The second movie from a filmmaker is almost more important than the first. We' ve got to get it right, '\" recalls Lawrence Bender, Tarantino' s longtime producing partner.Tarantino got it right, all right.In fact, Miramax 's Pulp Fiction might be the most influential movie made during the 1990s, inspiring scads of imitators (nicknamed Tarantinies) and dozens of knockoffs. \"We didn' t think we were taking a big risk, \" says Bender. \" We just though we were making something really cool.\"",
		1994
	),
	(
		97,
		"The Shawshank Redemption",
		"Of all the adaptations of Stephen King stories -- and they are legion because he is the most-adapted living writer -- this is only one of two (along with The Shining) to make the list. All that Shawshank love apparently came after the film's unexceptional theatrical release, when it began popping up on cable TV nearly as regularly as Geico commercials. In 2013, 151 hours of basic cable time was devoted to airing the 142-minute movie. That's about six days of watching Robbins try to escape from prison.",
		1994
	),
	(
		98,
		"Citizen Kane",
		"Critics have hailed this for decades as \" the greatest American movie ever made, \" making it an all-too-easy pick for anyone's greatest-movie list. But not all moviegoers, especially younger ones, are enthralled with the story of Charles Foster Kane and his long-lost sled. Among poll respondents in their 20s, for instance, it was only the 26th-favorite film. Among the under-20s, it was 53rd. Among those over 60, though, it was No. 1 or 2.",
		1941
	),
	(
		99,
		"The Wizard of Oz",
		"\" If I was on a desert island, I 'd bring The Wizard of Oz with me,\" says Elizabeth Daley, dean of the USC School of Cinematic Arts. \"It always makes me feel alive. I could watch it over and over.\" And people have, generation after generation. In fact, it' s the most - watched film of all time, according to the Library of Congress, thanks to regular showings on broadcast television since the mid - 1950s ( and on cable since the '90s). That' s not including sequels and prequels, which Hollywood keeps releasing each decade like swarms of flying monkeys.The most recent, Oz the Great and Powerful, starring James Franco as a hunky young wizard, grossed more than $ 230 million domestically.That yellow brick road clearly is made of gold.",
		1939
	),
	(
		100,
		"The Godfather ",
		"The Godfather came into this world, in the form of Mario Puzo 's novel, as pulp. In a feat of creative alchemy arguably unsurpassed before or since, Coppola and his collaborators turned the Mafia melodrama into popular art that satisfies on every possible level -- as a family drama, a crime saga, a visual and musical ravishment and an impeccable evocation of a historical period. Godfather is 42 years old, meaning anyone who saw it when it came out in 1972 is pushing 60 or older. This suggests its narrative power, extraordinary performances and mythic values register as strongly for younger viewers as they did at the time. The film also happens to stand at the precise midpoint between the arrival of sound films and the present. It is both classical and modern, traditional in its storytelling and contemporary in its critical perspective. It' s a film that does it all.— Todd McCarthy ",
		1972
	);

CREATE TABLE `users` (
	`id` int NOT NULL AUTO_INCREMENT,
	`username` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`firstName` varchar(255) NOT NULL,
	`lastName` varchar(255) NOT NULL,
	`sex` varchar(255) NOT NULL,
	`age` int(3) NOT NULL,
	`password` varchar(255) NOT NULL,
	`created_at` timestamp NULL DEFAULT NULL,
	`role` ENUM ('user', 'administrator') DEFAULT 'user' NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO
	`users` (
		`id`,
		`username`,
		`email`,
		`firstName`,
		`lastName`,
		`sex`,
		`age`,
		`password`,
		`created_at`,
		`role`
	)
VALUES
	(
		1,
		"administrator",
		"admin@gmail.com",
		"admin",
		"ssu",
		"male",
		20,
		"$2y$08$4s//PeRn9zewwlA460aAkO9ZJ2G.l9dPEBYiJdG7Nz49Gwxkt8IBO",
		"2020-04-23 05:57:23",
		"administrator"
	),
	(
		2,
		"user",
		"user@gmail.com",
		"Vladislav",
		"Godunov",
		"male",
		20,
		"$2y$08$q4pIbCVRH3XFDU6OaLkbQO/GbgBCF1vP6B0zSTLwVuNG/93rfrWna",
		"2020-04-23 05:57:23",
		"user"
	),
	(
		3,
		"user2",
		"anton@gmail.com",
		"Anton",
		"Promni",
		"male",
		20,
		"$2y$08$q4pIbCVRH3XFDU6OaLkbQO/GbgBCF1vP6B0zSTLwVuNG/93rfrWna",
		"2020-04-23 05:57:23",
		"user"
	),
	(
		4,
		"user3",
		"nikon@gmail.com",
		"Denis",
		"Nikon",
		"male",
		20,
		"$2y$08$q4pIbCVRH3XFDU6OaLkbQO/GbgBCF1vP6B0zSTLwVuNG/93rfrWna",
		"2020-04-23 05:57:23",
		"user"
	),
	(
		5,
		"user4",
		"dasha@gmail.com",
		"Dasha",
		"Nokia",
		"female",
		20,
		"$2y$08$q4pIbCVRH3XFDU6OaLkbQO/GbgBCF1vP6B0zSTLwVuNG/93rfrWna",
		"2020-04-23 05:57:23",
		"user"
	);

CREATE TABLE `rating` (
	`movie_id` int NOT NULL,
	`user_id` int NOT NULL,
	`rating` FLOAT NOT NULL
);

INSERT INTO
	`rating` (`movie_id`, `user_id`, `rating`)
VALUES
	(1, 1, 4),
	(2, 1, 4),
	(3, 1, 4),
	(4, 1, 2),
	(1, 2, 5),
	(2, 2, 3),
	(3, 2, 1),
	(4, 2, 5),
	(1, 3, 4),
	(2, 3, 3),
	(3, 3, 1),
	(4, 3, 5),
	(1, 4, 3),
	(2, 5, 4),
	(3, 4, 5),
	(4, 5, 1),
	(5, 1, 4),
	(6, 1, 4),
	(7, 1, 4),
	(8, 1, 2),
	(5, 4, 3),
	(6, 5, 4),
	(7, 4, 5),
	(8, 5, 1),
	(5, 3, 4),
	(6, 3, 1),
	(7, 3, 2),
	(8, 3, 3),
	(9, 1, 2),
	(10, 1, 4),
	(11, 1, 4),
	(12, 1, 1),
	(9, 2, 4),
	(10, 2, 1),
	(11, 2, 3),
	(12, 2, 5),
	(9, 3, 5),
	(10, 3, 5),
	(11, 3, 2),
	(12, 3, 2),
	(9, 5, 1),
	(10, 4, 5),
	(11, 5, 2),
	(12, 5, 4),
	(13, 1, 5),
	(14, 1, 4),
	(15, 1, 5),
	(16, 1, 5),
	(17, 1, 3),
	(18, 1, 4),
	(19, 1, 2),
	(20, 1, 4),
	(13, 2, 2),
	(14, 2, 4),
	(15, 2, 3),
	(16, 2, 4),
	(17, 2, 3),
	(18, 2, 5),
	(19, 2, 4),
	(20, 2, 5),
	(13, 5, 3),
	(14, 4, 5),
	(15, 5, 4),
	(16, 4, 4),
	(17, 5, 4),
	(18, 4, 4),
	(19, 5, 3),
	(20, 4, 5),
	(13, 4, 4),
	(14, 5, 4),
	(15, 4, 4),
	(16, 5, 5),
	(17, 4, 2),
	(18, 5, 1),
	(19, 4, 4),
	(20, 5, 3),
	(21, 1, 4),
	(22, 1, 5),
	(23, 1, 5),
	(24, 1, 4),
	(25, 1, 2),
	(26, 1, 1),
	(27, 1, 4),
	(28, 1, 5),
	(29, 1, 3),
	(30, 1, 2),
	(21, 2, 3),
	(22, 2, 4),
	(23, 2, 5),
	(24, 2, 1),
	(25, 2, 3),
	(26, 2, 4),
	(27, 2, 5),
	(28, 2, 1),
	(29, 2, 5),
	(30, 2, 1),
	(21, 5, 5),
	(22, 5, 5),
	(23, 5, 1),
	(24, 5, 2),
	(25, 5, 4),
	(26, 5, 2),
	(27, 5, 4),
	(28, 5, 1),
	(29, 5, 1),
	(30, 5, 5),
	(21, 3, 3),
	(22, 3, 4),
	(23, 3, 1),
	(24, 3, 1),
	(25, 3, 2),
	(26, 3, 2),
	(27, 3, 4),
	(28, 3, 3),
	(29, 3, 5),
	(30, 3, 5),
	(31, 2, 4),
	(32, 2, 4),
	(33, 2, 5),
	(34, 2, 5),
	(35, 2, 3),
	(36, 2, 4),
	(37, 2, 5),
	(38, 2, 5),
	(39, 2, 5),
	(40, 2, 5),
	(31, 1, 4),
	(32, 1, 4),
	(33, 1, 5),
	(34, 1, 1),
	(35, 1, 3),
	(36, 1, 4),
	(37, 1, 5),
	(38, 1, 5),
	(39, 1, 5),
	(40, 1, 5),
	(31, 5, 3),
	(32, 5, 2),
	(33, 5, 1),
	(34, 5, 1),
	(35, 5, 5),
	(36, 5, 3),
	(37, 5, 4),
	(38, 5, 3),
	(39, 5, 2),
	(40, 5, 1),
	(31, 3, 5),
	(32, 3, 5),
	(33, 3, 1),
	(34, 3, 2),
	(35, 3, 2),
	(36, 3, 1),
	(37, 3, 5),
	(38, 3, 1),
	(39, 3, 4),
	(40, 4, 4),
	(41, 3, 5),
	(42, 3, 5),
	(43, 3, 1),
	(44, 3, 2),
	(45, 3, 2),
	(46, 3, 1),
	(47, 3, 5),
	(48, 3, 1),
	(49, 3, 4),
	(50, 4, 4),
	(41, 5, 3),
	(42, 5, 2),
	(43, 5, 1),
	(44, 5, 1),
	(45, 5, 5),
	(46, 5, 3),
	(47, 5, 4),
	(48, 5, 3),
	(49, 5, 2),
	(50, 5, 1),
	(41, 2, 3),
	(42, 2, 4),
	(43, 2, 5),
	(44, 2, 1),
	(45, 2, 3),
	(46, 2, 4),
	(47, 2, 5),
	(48, 2, 1),
	(49, 2, 5),
	(50, 2, 1),
	(51, 2, 3),
	(52, 2, 4),
	(53, 2, 5),
	(54, 2, 1),
	(55, 2, 3),
	(56, 2, 4),
	(57, 2, 5),
	(58, 2, 1),
	(59, 2, 5),
	(60, 2, 1),
	(51, 5, 3),
	(52, 5, 2),
	(53, 5, 1),
	(54, 5, 1),
	(55, 5, 5),
	(56, 5, 3),
	(57, 5, 4),
	(58, 5, 3),
	(59, 5, 2),
	(60, 5, 1),
	(61, 5, 3),
	(62, 5, 2),
	(63, 5, 1),
	(64, 5, 1),
	(65, 5, 4),
	(66, 5, 3),
	(67, 5, 4),
	(68, 5, 3),
	(69, 5, 2),
	(70, 5, 1);

CREATE TABLE `location` (
	`id` int NOT NULL AUTO_INCREMENT,
	`movie_id` int NOT NULL,
	`location` TEXT NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO
	`location` (`id`, `movie_id`, `location`)
VALUES
	(1, 1, "France"),
	(2, 2, "Germany"),
	(3, 2, "France"),
	(4, 2, "USA"),
	(5, 3, "USA"),
	(6, 4, "Germany"),
	(7, 5, "China"),
	(8, 5, "Germany"),
	(9, 6, "Japanese"),
	(10, 7, "USA"),
	(11, 8, "Canada"),
	(12, 9, "Ukraine"),
	(13, 9, "Japanese"),
	(14, 10, "India"),
	(15, 11, "France"),
	(16, 12, "Great Britain"),
	(17, 13, "USA"),
	(18, 14, "Germany"),
	(19, 14, "China"),
	(20, 14, "USA"),
	(21, 15, "China"),
	(22, 16, "Spain"),
	(23, 17, "USA"),
	(24, 18, "Canada"),
	(25, 19, "Ukraine"),
	(26, 20, "India"),
	(27, 20, "Ukraine"),
	(28, 21, "France"),
	(29, 22, "Germany"),
	(30, 23, "Great Britain"),
	(31, 24, "Germany"),
	(32, 25, "China"),
	(33, 26, "Japanese"),
	(34, 27, "USA"),
	(35, 28, "Canada"),
	(36, 29, "Ukraine"),
	(37, 30, "Spain"),
	(38, 31, "France"),
	(39, 32, "Great Britain"),
	(40, 33, "USA"),
	(41, 34, "Germany"),
	(42, 35, "China"),
	(43, 36, "Japanese"),
	(44, 37, "USA"),
	(45, 38, "Canada"),
	(46, 39, "Ukraine"),
	(47, 40, "India"),
	(48, 41, "France"),
	(49, 42, "Germany"),
	(50, 43, "Spain"),
	(51, 44, "Germany"),
	(52, 45, "China"),
	(53, 46, "Japanese"),
	(54, 47, "USA"),
	(55, 48, "Canada"),
	(56, 49, "Great Britain"),
	(57, 50, "India"),
	(58, 51, "France"),
	(59, 52, "Germany"),
	(60, 53, "USA"),
	(61, 54, "Germany"),
	(62, 55, "China"),
	(63, 56, "Japanese"),
	(64, 57, "USA"),
	(65, 58, "Canada"),
	(66, 59, "Ukraine"),
	(67, 60, "India"),
	(68, 61, "Spain"),
	(69, 62, "Germany"),
	(70, 63, "USA"),
	(71, 64, "Germany"),
	(72, 65, "China"),
	(73, 66, "Japanese"),
	(74, 67, "USA"),
	(75, 68, "Spain"),
	(76, 69, "Ukraine"),
	(77, 70, "India"),
	(78, 71, "France"),
	(79, 72, "Germany"),
	(80, 73, "USA"),
	(81, 74, "Germany"),
	(82, 75, "China"),
	(83, 76, "Japanese"),
	(84, 77, "USA"),
	(85, 78, "Great Britain"),
	(86, 79, "Ukraine"),
	(87, 80, "India"),
	(88, 81, "France"),
	(89, 82, "Germany"),
	(90, 83, "USA"),
	(91, 84, "Germany"),
	(92, 85, "China"),
	(93, 86, "Japanese"),
	(94, 87, "USA"),
	(95, 88, "Canada"),
	(96, 89, "Ukraine"),
	(97, 90, "India"),
	(98, 91, "France"),
	(99, 92, "Germany"),
	(100, 93, "USA"),
	(101, 94, "Germany"),
	(102, 95, "China"),
	(103, 96, "Spain"),
	(104, 97, "USA"),
	(105, 98, "Canada"),
	(106, 99, "Great Britain"),
	(107, 100, "India");

CREATE TABLE `genres` (
	`id` int NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

INSERT INTO
	`genres` (`id`, `name`)
VALUES
	(1, "Action"),
	(2, "Adventure"),
	(3, "Comedy"),
	(4, "Crime"),
	(5, "Drama"),
	(6, "Action"),
	(7, "Epics/Historical"),
	(8, "Horror"),
	(9, "Musical/dance"),
	(10, "Science Fiction"),
	(11, "War"),
	(12, "Westerns");

CREATE TABLE `movie_genre` (
	`movie_id` int NOT NULL,
	`genre_id` int NOT NULL
);

INSERT INTO
	`movie_genre` (`movie_id`, `genre_id`)
VALUES
	(1, 2),
	(2, 3),
	(3, 2),
	(4, 3),
	(5, 2),
	(6, 3),
	(7, 2),
	(8, 3),
	(9, 3),
	(10, 2),
	(11, 3),
	(12, 2),
	(13, 3),
	(14, 2),
	(15, 3),
	(16, 2),
	(17, 3),
	(18, 2),
	(19, 3),
	(20, 2),
	(21, 3),
	(22, 2),
	(23, 3),
	(24, 2),
	(25, 3),
	(27, 2),
	(28, 3),
	(29, 2),
	(30, 3),
	(1, 1),
	(2, 12),
	(3, 10),
	(4, 4),
	(5, 5),
	(6, 6),
	(7, 4),
	(8, 4),
	(9, 5),
	(10, 4),
	(11, 5),
	(12, 3),
	(13, 4),
	(14, 8),
	(15, 9),
	(16, 10),
	(17, 11),
	(18, 5),
	(19, 6),
	(20, 8),
	(21, 9),
	(22, 4),
	(23, 1),
	(24, 7),
	(25, 6),
	(27, 8),
	(28, 9),
	(29, 10),
	(30, 12),
	(41, 2),
	(42, 3),
	(43, 2),
	(44, 3),
	(45, 2),
	(46, 3),
	(47, 2),
	(48, 3),
	(49, 3),
	(50, 2),
	(51, 3),
	(52, 2),
	(53, 3),
	(54, 2),
	(55, 3),
	(56, 2),
	(57, 3),
	(58, 2),
	(59, 3),
	(60, 2),
	(61, 3),
	(62, 2),
	(63, 3),
	(64, 2),
	(65, 3),
	(67, 2),
	(68, 3),
	(69, 2),
	(70, 3),
	(41, 8),
	(44, 4),
	(46, 7),
	(47, 10),
	(48, 12),
	(49, 5),
	(50, 7),
	(51, 8),
	(52, 1),
	(53, 5),
	(54, 4),
	(55, 5),
	(56, 9),
	(57, 7),
	(58, 8),
	(59, 9),
	(60, 7),
	(61, 4),
	(62, 7),
	(63, 6),
	(64, 8),
	(69, 7),
	(70, 10),
	(71, 2),
	(72, 3),
	(73, 2),
	(74, 3),
	(75, 2),
	(76, 3),
	(77, 2),
	(78, 3),
	(79, 3),
	(80, 9),
	(71, 7),
	(72, 10),
	(73, 12),
	(74, 5),
	(75, 7),
	(76, 6),
	(77, 7),
	(78, 7),
	(79, 5),
	(80, 7),
	(81, 7),
	(82, 10),
	(83, 12),
	(84, 5),
	(85, 7),
	(86, 6),
	(87, 7),
	(88, 7),
	(89, 5),
	(90, 7),
	(91, 2),
	(92, 3),
	(93, 2),
	(94, 3),
	(95, 2),
	(96, 3),
	(97, 2),
	(98, 3),
	(99, 3),
	(100, 2),
	(91, 12),
	(92, 8),
	(93, 12),
	(94, 7),
	(95, 10),
	(96, 7),
	(97, 12),
	(98, 9),
	(99, 7),
	(100, 11);

ALTER TABLE
	`users`
ADD
	UNIQUE KEY `users_email_unique` (`email`),
ADD
	UNIQUE KEY `users_username_unique` (`username`);

ALTER TABLE
	`rating`
ADD
	CONSTRAINT `rating_fk0` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`);

ALTER TABLE
	`rating`
ADD
	CONSTRAINT `rating_fk1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE
	`location`
ADD
	CONSTRAINT `location_fk0` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`);

ALTER TABLE
	`movie_genre`
ADD
	CONSTRAINT `movie_genre_fk0` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`);

ALTER TABLE
	`movie_genre`
ADD
	CONSTRAINT `movie_genre_fk1` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`);