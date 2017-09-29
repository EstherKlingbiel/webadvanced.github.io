var timer = 0;
var counter = 0;
var array = [//ANTHROPOCENTRICITIES
				//11 on each side
				'👵🏼👧🏽👦🏼👶🏻👵🏼👵🏼👴🏻👶🏻👩🏿👵🏼👵🏼 A N T H R O P O C E N T R I C I T I E S 👧🏽👦🏼👧🏽👵🏼👵🏼👵🏼👴🏻👧🏽👦🏼👴🏻👨🏾',
				//12 on each side
				'👴🏻👵🏼👶🏻👵🏼👦🏼👵🏼👵🏼👵🏼👵🏼👨🏾👶🏻👵🏼 N T H R O P O C E N T R I C I T I E 👴🏻👴🏻👵🏼👩🏿👵🏼👶🏻👨🏾👵🏼👦🏼👶🏻👵🏼👶🏻',
				//13 on each side
				'👴🏻👨🏾👦🏼👵🏼👦🏼👨🏾👵🏼👵🏼👦🏼👩🏿👵🏼👨🏾👧🏽 T H R O P O C E N T R I C I T I 👴🏻👦🏼👩🏿👨🏾👵🏼👩🏿👩🏿👩🏿👶🏻👵🏼👨🏾👩🏿👶🏻',
				//14 on each side
				'👶🏻👶🏻👵🏼👶🏻👵🏼👶🏻👧🏽👴🏻👵🏼👵🏼👧🏽👧🏽👩🏿👶🏻 H R O P O C E N T R I C I T 👵🏼👵🏼👵🏼👵🏼👦🏼👨🏾👵🏼👵🏼👴🏻👶🏻👵🏼👦🏼👵🏼👧🏽',
				//15 on each side
				'👵🏼👴🏻👶🏻👧🏽👵🏼👵🏼👨🏾👴🏻👴🏻👨🏾👧🏽👶🏻👵🏼👶🏻👵🏼 R O P O C E N T R I C I 👵🏼👴🏻👦🏼👴🏻👵🏼👶🏻👵🏼👶🏻👦🏼👵🏼👵🏼👵🏼👵🏼👵🏼👴🏻',
				//16 on each side
				'👵🏼👵🏼👵🏼👴🏻👵🏼👶🏻👦🏼👵🏼👩🏿👵🏼👩🏿👦🏼👶🏻👵🏼👵🏼👦🏼 O P O C E N T R I C 👵🏼👶🏻👶🏻👧🏽👵🏼👴🏻👶🏻👵🏼👴🏻👴🏻👵🏼👵🏼👵🏼👩🏿👧🏽👨🏾',
				//17 on each side
				'👨🏾👩🏿👵🏼👵🏼👩🏿👵🏼👵🏼👨🏾👴🏻👵🏼👴🏻👦🏼👵🏼👨🏾👵🏼👦🏼👵🏼 P O C E N T R I 👧🏽👨🏾👵🏼👴🏻👵🏼👵🏼👵🏼👦🏼👧🏽👧🏽👴🏻👶🏻👩🏿👩🏿👵🏼👧🏽👧🏽',
				//18 on each side
				'👩🏿👴🏻👩🏿👵🏼👩🏿👵🏼👨🏾👵🏼👵🏼👵🏼👶🏻👵🏼👶🏻👶🏻👶🏻👴🏻👵🏼👵🏼 O C E N T R 👨🏾👵🏼👵🏼👵🏼👶🏻👧🏽👵🏼👶🏻👩🏿👶🏻👨🏾👩🏿👵🏼👵🏼👵🏼👦🏼👦🏼👴🏻',
				//19 on each side
				'👦🏼👵🏼👵🏼👶🏻👵🏼👴🏻👵🏼👵🏼👴🏻👶🏻👦🏼👨🏾👦🏼👩🏿👩🏿👵🏼👵🏼👵🏼👵🏼 C E N T 👧🏽👩🏿👩🏿👦🏼👴🏻👵🏼👵🏼👩🏿👵🏼👴🏻👩🏿👵🏼👦🏼👵🏼👧🏽👦🏼👨🏾👵🏼👵🏼',
				//20 on each side
				'👧🏽👵🏼👵🏼👴🏻👦🏼👩🏿👧🏽👩🏿👵🏼👨🏾👶🏻👵🏼👵🏼👴🏻👶🏻👨🏾👴🏻👦🏼👨🏾👵🏼 E N 👨🏾👨🏾👵🏼👵🏼👩🏿👩🏿👩🏿👵🏼👧🏽👶🏻👵🏼👨🏾👩🏿👵🏼👴🏻👦🏼👴🏻👦🏼👵🏼👦🏼',
				//19 on each side
				'👦🏼👵🏼👵🏼👶🏻👵🏼👴🏻👵🏼👵🏼👴🏻👶🏻👦🏼👨🏾👦🏼👩🏿👩🏿👵🏼👵🏼👵🏼👵🏼 C E N T 👧🏽👩🏿👩🏿👦🏼👴🏻👵🏼👵🏼👩🏿👵🏼👴🏻👩🏿👵🏼👦🏼👵🏼👧🏽👦🏼👨🏾👵🏼👵🏼',
				//18 on each side
				'👩🏿👴🏻👩🏿👵🏼👩🏿👵🏼👨🏾👵🏼👵🏼👵🏼👶🏻👵🏼👶🏻👶🏻👶🏻👴🏻👵🏼👵🏼 O C E N T R 👨🏾👵🏼👵🏼👵🏼👶🏻👧🏽👵🏼👶🏻👩🏿👶🏻👨🏾👩🏿👵🏼👵🏼👵🏼👦🏼👦🏼👴🏻',
				//17 on each side
				'👨🏾👩🏿👵🏼👵🏼👩🏿👵🏼👵🏼👨🏾👴🏻👵🏼👴🏻👦🏼👵🏼👨🏾👵🏼👦🏼👵🏼 P O C E N T R I 👧🏽👨🏾👵🏼👴🏻👵🏼👵🏼👵🏼👦🏼👧🏽👧🏽👴🏻👶🏻👩🏿👩🏿👵🏼👧🏽👧🏽',
				//16 on each side
				'👵🏼👵🏼👵🏼👴🏻👵🏼👶🏻👦🏼👵🏼👩🏿👵🏼👩🏿👦🏼👶🏻👵🏼👵🏼👦🏼 O P O C E N T R I C 👵🏼👶🏻👶🏻👧🏽👵🏼👴🏻👶🏻👵🏼👴🏻👴🏻👵🏼👵🏼👵🏼👩🏿👧🏽👨🏾',
				//15 on each side
				'👵🏼👴🏻👶🏻👧🏽👵🏼👵🏼👨🏾👴🏻👴🏻👨🏾👧🏽👶🏻👵🏼👶🏻👵🏼 R O P O C E N T R I C I 👵🏼👴🏻👦🏼👴🏻👵🏼👶🏻👵🏼👶🏻👦🏼👵🏼👵🏼👵🏼👵🏼👵🏼👴🏻',
				//14 on each side
				'👶🏻👶🏻👵🏼👶🏻👵🏼👶🏻👧🏽👴🏻👵🏼👵🏼👧🏽👧🏽👩🏿👶🏻 H R O P O C E N T R I C I T 👵🏼👵🏼👵🏼👵🏼👦🏼👨🏾👵🏼👵🏼👴🏻👶🏻👵🏼👦🏼👵🏼👧🏽',
				//13 on each side
				'👴🏻👨🏾👦🏼👵🏼👦🏼👨🏾👵🏼👵🏼👦🏼👩🏿👵🏼👨🏾👧🏽 T H R O P O C E N T R I C I T I 👴🏻👦🏼👩🏿👨🏾👵🏼👩🏿👩🏿👩🏿👶🏻👵🏼👨🏾👩🏿👶🏻',
				//12 on each side
				'👴🏻👵🏼👶🏻👵🏼👦🏼👵🏼👵🏼👵🏼👵🏼👨🏾👶🏻👵🏼 N T H R O P O C E N T R I C I T I E 👴🏻👴🏻👵🏼👩🏿👵🏼👶🏻👨🏾👵🏼👦🏼👶🏻👵🏼👶🏻',
				//11 on each side
				'👵🏼👧🏽👦🏼👶🏻👵🏼👵🏼👴🏻👶🏻👩🏿👵🏼👵🏼 A N T H R O P O C E N T R I C I T I E S 👧🏽👦🏼👧🏽👵🏼👵🏼👵🏼👴🏻👧🏽👦🏼👴🏻👨🏾',
			//END ANTHROPOCENTRICITIES
			//BUCKMINSTERFULLERENE
				//11 on each side
				'🔬🔬👨🏽‍🔬🔬🔬👨🏽‍🔬⚛️👨🏽‍🔬👩🏾‍🔬👨🏽‍🔬🔬 B U C K M I N S T E R F U L L E R E N E ⚛️🔬👩🏾‍🔬⚗️👩🏾‍🔬⚗️🔬👨🏽‍🔬⚗️⚗️👩🏾‍🔬',
				//12 on each side
				'👩🏾‍🔬👨🏽‍🔬👨🏽‍🔬👨🏽‍🔬👨🏽‍🔬⚗️👩🏾‍🔬👩🏾‍🔬👩🏾‍🔬🔬👩🏾‍🔬🔬 U C K M I N S T E R F U L L E R E N ⚗️👨🏽‍🔬⚛️⚗️⚗️👩🏾‍🔬⚗️👨🏽‍🔬🔬⚛️🔬⚛️',
				//13 on each side
				'👩🏾‍🔬👩🏾‍🔬⚛️👩🏾‍🔬⚗️👩🏾‍🔬👩🏾‍🔬⚛️⚛️⚛️⚛️⚗️⚗️ C K M I N S T E R F U L L E R E 👩🏾‍🔬👨🏽‍🔬👨🏽‍🔬⚗️👩🏾‍🔬🔬⚗️⚗️⚗️⚗️👩🏾‍🔬⚛️⚗️',
				//14 on each side 
				'👩🏾‍🔬🔬⚛️⚛️👨🏽‍🔬⚗️🔬👨🏽‍🔬👩🏾‍🔬👨🏽‍🔬⚗️👩🏾‍🔬👩🏾‍🔬⚗️ K M I N S T E R F U L L E R 🔬👨🏽‍🔬🔬⚛️⚗️⚗️👩🏾‍🔬🔬⚗️⚛️🔬👩🏾‍🔬⚛️🔬',
				//15 on each side
				'🔬👩🏾‍🔬👩🏾‍🔬👩🏾‍🔬🔬👩🏾‍🔬⚗️⚛️⚛️👨🏽‍🔬🔬👩🏾‍🔬⚛️👨🏽‍🔬🔬 M I N S T E R F U L L E ⚛️👩🏾‍🔬👨🏽‍🔬👨🏽‍🔬🔬⚛️👨🏽‍🔬⚗️⚗️⚗️🔬⚗️⚗️👩🏾‍🔬👩🏾‍🔬',
				//16 on each side
				'👨🏽‍🔬🔬🔬👨🏽‍🔬👨🏽‍🔬👩🏾‍🔬⚗️⚛️👨🏽‍🔬👩🏾‍🔬👨🏽‍🔬⚗️👨🏽‍🔬⚗️⚗️👩🏾‍🔬 I N S T E R F U L L 🔬👩🏾‍🔬🔬⚛️⚛️⚛️⚗️👨🏽‍🔬⚛️👨🏽‍🔬⚛️⚛️⚗️👩🏾‍🔬⚗️⚗️',
				//17 on each side
				'⚗️🔬⚗️👨🏽‍🔬🔬⚗️🔬👩🏾‍🔬⚗️👨🏽‍🔬🔬👨🏽‍🔬⚛️⚗️⚗️👨🏽‍🔬⚛️ N S T E R F U L 👩🏾‍🔬👩🏾‍🔬🔬🔬👨🏽‍🔬👨🏽‍🔬👩🏾‍🔬⚛️⚛️⚗️👩🏾‍🔬⚗️⚗️⚗️👨🏽‍🔬🔬👨🏽‍🔬',
				//18 on each side
				'👩🏾‍🔬👩🏾‍🔬🔬⚛️🔬⚗️👩🏾‍🔬🔬👩🏾‍🔬👨🏽‍🔬🔬🔬👩🏾‍🔬🔬👨🏽‍🔬⚗️👩🏾‍🔬👩🏾‍🔬 S T E R F U ⚛️👨🏽‍🔬⚛️⚗️⚛️⚛️🔬⚛️👨🏽‍🔬👩🏾‍🔬👩🏾‍🔬⚗️🔬⚛️🔬⚛️⚗️🔬',
				//19 on each side
				'👩🏾‍🔬⚛️⚗️🔬⚛️⚛️🔬⚗️⚗️👨🏽‍🔬👨🏽‍🔬👩🏾‍🔬👩🏾‍🔬👩🏾‍🔬🔬👩🏾‍🔬⚛️👨🏽‍🔬👩🏾‍🔬 T E R F 🔬👨🏽‍🔬⚛️👩🏾‍🔬⚗️⚗️⚗️👩🏾‍🔬👩🏾‍🔬👩🏾‍🔬⚗️🔬👩🏾‍🔬👨🏽‍🔬⚛️👨🏽‍🔬⚗️👩🏾‍🔬⚗️',
				//20 on each side
				'⚗️👨🏽‍🔬🔬⚗️👩🏾‍🔬⚗️⚗️⚛️👩🏾‍🔬🔬⚗️👨🏽‍🔬👨🏽‍🔬👨🏽‍🔬👩🏾‍🔬⚗️👩🏾‍🔬👩🏾‍🔬🔬👩🏾‍🔬 E R ⚗️🔬👨🏽‍🔬⚗️⚗️👨🏽‍🔬👨🏽‍🔬👩🏾‍🔬🔬👩🏾‍🔬⚛️🔬⚛️👩🏾‍🔬⚗️⚗️🔬👨🏽‍🔬👩🏾‍🔬⚗️',
				//19 on each side
				'👩🏾‍🔬⚛️⚗️🔬⚛️⚛️🔬⚗️⚗️👨🏽‍🔬👨🏽‍🔬👩🏾‍🔬👩🏾‍🔬👩🏾‍🔬🔬👩🏾‍🔬⚛️👨🏽‍🔬👩🏾‍🔬 T E R F 🔬👨🏽‍🔬⚛️👩🏾‍🔬⚗️⚗️⚗️👩🏾‍🔬👩🏾‍🔬👩🏾‍🔬⚗️🔬👩🏾‍🔬👨🏽‍🔬⚛️👨🏽‍🔬⚗️👩🏾‍🔬⚗️',
				//18 on each side
				'👩🏾‍🔬👩🏾‍🔬🔬⚛️🔬⚗️👩🏾‍🔬🔬👩🏾‍🔬👨🏽‍🔬🔬🔬👩🏾‍🔬🔬👨🏽‍🔬⚗️👩🏾‍🔬👩🏾‍🔬 S T E R F U ⚛️👨🏽‍🔬⚛️⚗️⚛️⚛️🔬⚛️👨🏽‍🔬👩🏾‍🔬👩🏾‍🔬⚗️🔬⚛️🔬⚛️⚗️🔬',
				//17 on each side
				'⚗️🔬⚗️👨🏽‍🔬🔬⚗️🔬👩🏾‍🔬⚗️👨🏽‍🔬🔬👨🏽‍🔬⚛️⚗️⚗️👨🏽‍🔬⚛️ N S T E R F U L 👩🏾‍🔬👩🏾‍🔬🔬🔬👨🏽‍🔬👨🏽‍🔬👩🏾‍🔬⚛️⚛️⚗️👩🏾‍🔬⚗️⚗️⚗️👨🏽‍🔬🔬👨🏽‍🔬',
				//16 on each side
				'👨🏽‍🔬🔬🔬👨🏽‍🔬👨🏽‍🔬👩🏾‍🔬⚗️⚛️👨🏽‍🔬👩🏾‍🔬👨🏽‍🔬⚗️👨🏽‍🔬⚗️⚗️👩🏾‍🔬 I N S T E R F U L L 🔬👩🏾‍🔬🔬⚛️⚛️⚛️⚗️👨🏽‍🔬⚛️👨🏽‍🔬⚛️⚛️⚗️👩🏾‍🔬⚗️⚗️',
				//15 on each side
				'🔬👩🏾‍🔬👩🏾‍🔬👩🏾‍🔬🔬👩🏾‍🔬⚗️⚛️⚛️👨🏽‍🔬🔬👩🏾‍🔬⚛️👨🏽‍🔬🔬 M I N S T E R F U L L E ⚛️👩🏾‍🔬👨🏽‍🔬👨🏽‍🔬🔬⚛️👨🏽‍🔬⚗️⚗️⚗️🔬⚗️⚗️👩🏾‍🔬👩🏾‍🔬',
				//14 on each side
				'👩🏾‍🔬🔬⚛️⚛️👨🏽‍🔬⚗️🔬👨🏽‍🔬👩🏾‍🔬👨🏽‍🔬⚗️👩🏾‍🔬👩🏾‍🔬⚗️ K M I N S T E R F U L L E R 🔬👨🏽‍🔬🔬⚛️⚗️⚗️👩🏾‍🔬🔬⚗️⚛️🔬👩🏾‍🔬⚛️🔬',
				//13 on each side
				'👩🏾‍🔬👩🏾‍🔬⚛️👩🏾‍🔬⚗️👩🏾‍🔬👩🏾‍🔬⚛️⚛️⚛️⚛️⚗️⚗️ C K M I N S T E R F U L L E R E 👩🏾‍🔬👨🏽‍🔬👨🏽‍🔬⚗️👩🏾‍🔬🔬⚗️⚗️⚗️⚗️👩🏾‍🔬⚛️⚗️',
				//12 on each side
				'👩🏾‍🔬👨🏽‍🔬👨🏽‍🔬👨🏽‍🔬👨🏽‍🔬⚗️👩🏾‍🔬👩🏾‍🔬👩🏾‍🔬🔬👩🏾‍🔬🔬 U C K M I N S T E R F U L L E R E N ⚗️👨🏽‍🔬⚛️⚗️⚗️👩🏾‍🔬⚗️👨🏽‍🔬🔬⚛️🔬⚛️',
				//11 on each side
				'🔬🔬👨🏽‍🔬🔬🔬👨🏽‍🔬⚛️👨🏽‍🔬👩🏾‍🔬👨🏽‍🔬🔬 B U C K M I N S T E R F U L L E R E N E ⚛️🔬👩🏾‍🔬⚗️👩🏾‍🔬⚗️🔬👨🏽‍🔬⚗️⚗️👩🏾‍🔬',
			//END BUCKMINSTERFULLERENE
			//CRYSTALLOGRAPHICALLY
				//11 on each side
				'👨🏿‍🔬⚛️💠💍💎💍👩🏻‍🔬👨🏿‍🔬💠👨🏿‍🔬👩🏻‍🔬 C R Y S T A L L O G R A P H I C A L L Y ⚛️👨🏿‍🔬💠💠🔮💍💍💠💠💎⚛️',
				//12 on each side
				'💎💎👩🏻‍🔬💠🔮⚛️🔮💎💠👨🏿‍🔬💎🔮 R Y S T A L L O G R A P H I C A L L 🔮👩🏻‍🔬💍💎👨🏿‍🔬💎👩🏻‍🔬💍⚛️👨🏿‍🔬👩🏻‍🔬🔮',
				//13 on each side
				'⚛️👨🏿‍🔬💠👨🏿‍🔬🔮👩🏻‍🔬💎🔮⚛️💍👩🏻‍🔬👨🏿‍🔬⚛️ Y S T A L L O G R A P H I C A L 💍💠💠🔮💍👩🏻‍🔬👨🏿‍🔬🔮👨🏿‍🔬💍💎⚛️💎',
				//14 on each side
				'💍👩🏻‍🔬👩🏻‍🔬🔮🔮💎💎👨🏿‍🔬⚛️💍👨🏿‍🔬💍⚛️👩🏻‍🔬 S T A L L O G R A P H I C A 👩🏻‍🔬🔮💍🔮💍🔮💠👩🏻‍🔬💠👨🏿‍🔬💎🔮👩🏻‍🔬💍',
				//15 on each side
				'💠💎👨🏿‍🔬⚛️💎👨🏿‍🔬💠👨🏿‍🔬👩🏻‍🔬💍💎👨🏿‍🔬👨🏿‍🔬👩🏻‍🔬⚛️ T A L L O G R A P H I C 💎💍💎💍💠👨🏿‍🔬💎👨🏿‍🔬💍💠👨🏿‍🔬⚛️🔮💠💎',
				//16 on each side
				'💎🔮⚛️🔮💠💎👩🏻‍🔬⚛️💎👨🏿‍🔬🔮💎👨🏿‍🔬👩🏻‍🔬⚛️🔮 A L L O G R A P H I 💍💍💎🔮🔮💠👨🏿‍🔬💍💎👨🏿‍🔬💎🔮⚛️👩🏻‍🔬💍💍',
				//17 on each side
				'💍👩🏻‍🔬💠👨🏿‍🔬👨🏿‍🔬👨🏿‍🔬👨🏿‍🔬💎👩🏻‍🔬👨🏿‍🔬💠💠💠👨🏿‍🔬👩🏻‍🔬💍👩🏻‍🔬 L L O G R A P H 👩🏻‍🔬💍🔮👩🏻‍🔬⚛️💍💎⚛️💎💍💎👨🏿‍🔬👩🏻‍🔬💠🔮💠👨🏿‍🔬',
				//18 on each side
				'🔮⚛️👩🏻‍🔬👩🏻‍🔬⚛️💠🔮💎👩🏻‍🔬💎👩🏻‍🔬👩🏻‍🔬👨🏿‍🔬👨🏿‍🔬💠⚛️💍👨🏿‍🔬 L O G R A P 👩🏻‍🔬💠💠💎🔮⚛️👨🏿‍🔬💎👨🏿‍🔬💍🔮🔮⚛️👩🏻‍🔬💍💎👩🏻‍🔬👩🏻‍🔬',
				//19 on each side
				'👨🏿‍🔬💠👩🏻‍🔬⚛️💍👨🏿‍🔬🔮👨🏿‍🔬👩🏻‍🔬👨🏿‍🔬🔮👩🏻‍🔬👩🏻‍🔬💎👩🏻‍🔬🔮👩🏻‍🔬🔮🔮 O G R A 🔮⚛️⚛️💎💎⚛️💍👩🏻‍🔬👨🏿‍🔬🔮💠💎👨🏿‍🔬🔮💎👨🏿‍🔬🔮👩🏻‍🔬⚛️',
				//20 on each side 
				'👨🏿‍🔬💎⚛️👨🏿‍🔬💍💍👨🏿‍🔬⚛️💍💠🔮💠💍💠👩🏻‍🔬💠👩🏻‍🔬👩🏻‍🔬👩🏻‍🔬👨🏿‍🔬 G R 💍💎👩🏻‍🔬💍🔮👩🏻‍🔬⚛️👨🏿‍🔬💠👩🏻‍🔬🔮⚛️💎💠💠🔮💍👩🏻‍🔬💎🔮',
				//19 on each side
				'👨🏿‍🔬💠👩🏻‍🔬⚛️💍👨🏿‍🔬🔮👨🏿‍🔬👩🏻‍🔬👨🏿‍🔬🔮👩🏻‍🔬👩🏻‍🔬💎👩🏻‍🔬🔮👩🏻‍🔬🔮🔮 O G R A 🔮⚛️⚛️💎💎⚛️💍👩🏻‍🔬👨🏿‍🔬🔮💠💎👨🏿‍🔬🔮💎👨🏿‍🔬🔮👩🏻‍🔬⚛️',
				//18 on each side
				'🔮⚛️👩🏻‍🔬👩🏻‍🔬⚛️💠🔮💎👩🏻‍🔬💎👩🏻‍🔬👩🏻‍🔬👨🏿‍🔬👨🏿‍🔬💠⚛️💍👨🏿‍🔬 L O G R A P 👩🏻‍🔬💠💠💎🔮⚛️👨🏿‍🔬💎👨🏿‍🔬💍🔮🔮⚛️👩🏻‍🔬💍💎👩🏻‍🔬👩🏻‍🔬',
				//17 on each side
				'💍👩🏻‍🔬💠👨🏿‍🔬👨🏿‍🔬👨🏿‍🔬👨🏿‍🔬💎👩🏻‍🔬👨🏿‍🔬💠💠💠👨🏿‍🔬👩🏻‍🔬💍👩🏻‍🔬 L L O G R A P H 👩🏻‍🔬💍🔮👩🏻‍🔬⚛️💍💎⚛️💎💍💎👨🏿‍🔬👩🏻‍🔬💠🔮💠👨🏿‍🔬',
				//16 on each side
				'💎🔮⚛️🔮💠💎👩🏻‍🔬⚛️💎👨🏿‍🔬🔮💎👨🏿‍🔬👩🏻‍🔬⚛️🔮 A L L O G R A P H I 💍💍💎🔮🔮💠👨🏿‍🔬💍💎👨🏿‍🔬💎🔮⚛️👩🏻‍🔬💍💍',
				//15 on each side
				'💠💎👨🏿‍🔬⚛️💎👨🏿‍🔬💠👨🏿‍🔬👩🏻‍🔬💍💎👨🏿‍🔬👨🏿‍🔬👩🏻‍🔬⚛️ T A L L O G R A P H I C 💎💍💎💍💠👨🏿‍🔬💎👨🏿‍🔬💍💠👨🏿‍🔬⚛️🔮💠💎',
				//14 on each side
				'💍👩🏻‍🔬👩🏻‍🔬🔮🔮💎💎👨🏿‍🔬⚛️💍👨🏿‍🔬💍⚛️👩🏻‍🔬 S T A L L O G R A P H I C A 👩🏻‍🔬🔮💍🔮💍🔮💠👩🏻‍🔬💠👨🏿‍🔬💎🔮👩🏻‍🔬💍',
				//13 on each side
				'⚛️👨🏿‍🔬💠👨🏿‍🔬🔮👩🏻‍🔬💎🔮⚛️💍👩🏻‍🔬👨🏿‍🔬⚛️ Y S T A L L O G R A P H I C A L 💍💠💠🔮💍👩🏻‍🔬👨🏿‍🔬🔮👨🏿‍🔬💍💎⚛️💎',
				//12 on each side
				'💎💎👩🏻‍🔬💠🔮⚛️🔮💎💠👨🏿‍🔬💎🔮 R Y S T A L L O G R A P H I C A L L 🔮👩🏻‍🔬💍💎👨🏿‍🔬💎👩🏻‍🔬💍⚛️👨🏿‍🔬👩🏻‍🔬🔮',
				//11 on each side
				'👨🏿‍🔬⚛️💠💍💎💍👩🏻‍🔬👨🏿‍🔬💠👨🏿‍🔬👩🏻‍🔬 C R Y S T A L L O G R A P H I C A L L Y ⚛️👨🏿‍🔬💠💠🔮💍💍💠💠💎⚛️',
			//END CRYSTALLOGRAPHICALLY
			//DEPARTMENTALIZATIONS
				//11 on each side 
				'🔩⚙️⛏️⛏️⛏️🔧⛏️⛏️🔩⛏️🔧 D E P A R T M E N T A L I Z A T I O N S 🔨🔨🔩🔩⚙️🔨🔧⛏️⛏️🔩🔩',
				//12 on each side 
				'⛏️🔧🔨⛏️🔧⚙️🔨🔧⛏️⚙️🔧🔩 E P A R T M E N T A L I Z A T I O N 🔩⚙️🔨🔩🔧🔩🔧🔧🔩🔨🔨🔧',
				//13 on each side 
				'⛏️⚙️⛏️🔨🔩🔨🔨⛏️🔨🔧🔧🔩⚙️ P A R T M E N T A L I Z A T I O 🔧🔧⚙️⚙️🔧⛏️🔧🔩🔩🔩🔨🔨🔩',
				//14 on each side 
				'⚙️⚙️🔩⚙️⚙️🔩🔩⛏️⚙️⚙️🔨⛏️⚙️🔧 A R T M E N T A L I Z A T I 🔩🔨🔧🔧⚙️⛏️🔩🔩⛏️🔩🔨🔩🔧🔧',
				//15 on each side 
				'⛏️⚙️🔩🔩🔧🔨⛏️🔧🔩⛏️🔧🔩🔧🔨🔩 R T M E N T A L I Z A T ⚙️🔨⚙️🔨🔨⛏️⚙️⚙️⚙️⚙️🔩🔨🔩🔨⛏️',
				//16 on each side 
				'🔨⚙️⛏️🔩⛏️🔩⚙️🔩🔩🔧⚙️⚙️⚙️🔧🔨🔧 T M E N T A L I Z A 🔩⛏️🔨⛏️🔩⚙️⚙️🔩⛏️🔨🔧🔧🔧🔩🔨🔨',
				//17 on each side 
				'🔨🔧⛏️🔩🔧⛏️⛏️🔨⚙️🔨🔨🔨⚙️🔩⚙️⚙️⚙️ M E N T A L I Z 🔨⚙️⛏️⚙️🔩⛏️🔧🔨🔩⚙️🔩🔩🔩⛏️⚙️⚙️🔩',
				//18 on each side 
				'⛏️🔧⛏️⛏️🔨🔩🔩⚙️🔧⛏️⛏️🔧⛏️🔨🔨🔨🔧⛏️ E N T A L I 🔨🔩🔨⛏️⚙️🔧⚙️⚙️⚙️⛏️🔧⚙️🔩⚙️🔩⚙️🔨🔧',
				//19 on each side 
				'⛏️🔩🔧⛏️⛏️🔧⚙️🔧⚙️🔩🔩🔧⛏️🔨🔨⛏️⚙️🔧⛏️ N T A L 🔨⚙️🔩🔨🔩🔩⛏️⚙️🔧🔧⚙️⚙️⛏️⚙️⚙️⚙️⚙️🔧🔩',
				//20 on each side 
				'🔩⛏️🔨⛏️🔩🔧🔧🔨🔧🔩🔧⛏️🔧⛏️🔩🔨🔧⚙️🔩⚙️ T A 🔧⛏️⛏️🔧🔧🔧⛏️🔨🔧🔨🔧🔩⚙️⚙️⚙️⛏️🔩🔨🔩🔨',
				//19 on each side 
				'⛏️🔩🔧⛏️⛏️🔧⚙️🔧⚙️🔩🔩🔧⛏️🔨🔨⛏️⚙️🔧⛏️ N T A L 🔨⚙️🔩🔨🔩🔩⛏️⚙️🔧🔧⚙️⚙️⛏️⚙️⚙️⚙️⚙️🔧🔩',
				//18 on each side 
				'⛏️🔧⛏️⛏️🔨🔩🔩⚙️🔧⛏️⛏️🔧⛏️🔨🔨🔨🔧⛏️ E N T A L I 🔨🔩🔨⛏️⚙️🔧⚙️⚙️⚙️⛏️🔧⚙️🔩⚙️🔩⚙️🔨🔧',
				//17 on each side 
				'🔨🔧⛏️🔩🔧⛏️⛏️🔨⚙️🔨🔨🔨⚙️🔩⚙️⚙️⚙️ M E N T A L I Z 🔨⚙️⛏️⚙️🔩⛏️🔧🔨🔩⚙️🔩🔩🔩⛏️⚙️⚙️🔩',
				//16 on each side 
				'🔨⚙️⛏️🔩⛏️🔩⚙️🔩🔩🔧⚙️⚙️⚙️🔧🔨🔧 T M E N T A L I Z A 🔩⛏️🔨⛏️🔩⚙️⚙️🔩⛏️🔨🔧🔧🔧🔩🔨🔨',
				//15 on each side 
				'⛏️⚙️🔩🔩🔧🔨⛏️🔧🔩⛏️🔧🔩🔧🔨🔩 R T M E N T A L I Z A T ⚙️🔨⚙️🔨🔨⛏️⚙️⚙️⚙️⚙️🔩🔨🔩🔨⛏️',
				//14 on each side 
				'⚙️⚙️🔩⚙️⚙️🔩🔩⛏️⚙️⚙️🔨⛏️⚙️🔧 A R T M E N T A L I Z A T I 🔩🔨🔧🔧⚙️⛏️🔩🔩⛏️🔩🔨🔩🔧🔧',
				//13 on each side 
				'⛏️⚙️⛏️🔨🔩🔨🔨⛏️🔨🔧🔧🔩⚙️ P A R T M E N T A L I Z A T I O 🔧🔧⚙️⚙️🔧⛏️🔧🔩🔩🔩🔨🔨🔩',
				//12 on each side 
				'⛏️🔧🔨⛏️🔧⚙️🔨🔧⛏️⚙️🔧🔩 E P A R T M E N T A L I Z A T I O N 🔩⚙️🔨🔩🔧🔩🔧🔧🔩🔨🔨🔧',
				//11 on each side 
				'🔩⚙️⛏️⛏️⛏️🔧⛏️⛏️🔩⛏️🔧 D E P A R T M E N T A L I Z A T I O N S 🔨🔨🔩🔩⚙️🔨🔧⛏️⛏️🔩🔩',
			//END DEPARTMENTALIZATIONS
			//EXTEMPORANEOUSNESSES
				//11 on each side 
				'🥁🎺🥁🎹🎤🎷🎤🎷🥁🎤🎤 E X T E M P O R A N E O U S N E S S E S 🎷🎹🥁🎷🥁🥁🥁🎤🎹🎺🥁',
				//12 on each side 
				'🎹🎹🎷🎤🎤🥁🎺🎺🎺🥁🎹🎤 X T E M P O R A N E O U S N E S S E 🎹🎤🥁🎺🎺🥁🎷🎤🎹🎺🎺🎤',
				//13 on each side 
				'🎹🎷🎺🎹🥁🎹🎺🎤🥁🎷🎤🥁🎹 T E M P O R A N E O U S N E S S 🎤🎤🎹🎤🥁🎹🎤🎹🎷🎹🎤🎤🎤',
				//14 on each side 
				'🎤🥁🎹🎺🎤🎹🎷🎤🥁🎹🥁🎤🥁🎷 E M P O R A N E O U S N E S 🎹🎤🎷🎤🎹🎤🎹🎤🥁🎤🎺🎤🎤🎹',
				//15 on each side 
				'🎺🎺🎷🎷🥁🎺🥁🥁🎷🎹🎹🥁🥁🎷🎺 M P O R A N E O U S N E 🥁🥁🎷🎹🥁🎷🎤🎹🎤🎤🎹🥁🥁🎹🎺',
				//16 on each side 
				'🎷🥁🎤🎺🎹🥁🎹🎺🥁🎷🎺🎺🎷🎷🎹🥁 P O R A N E O U S N 🎺🎺🎷🎹🎤🥁🎹🎺🎺🥁🎹🎺🎺🎷🥁🥁',
				//17 on each side 
				'🥁🎺🎹🎺🥁🎤🎷🎤🎤🎷🎺🎺🎷🎷🎹🥁🎷 O R A N E O U S 🎺🎹🥁🎺🎤🎹🎷🥁🎤🎺🎷🎹🥁🎺🎹🎺🎺',
				//18 on each side 
				'🎹🎺🎤🎺🎹🎹🎷🎷🎷🎹🎷🥁🥁🥁🥁🎺🎺🥁 R A N E O U 🎤🎹🎹🎹🎹🎤🥁🎤🎺🎤🎹🎷🎹🥁🎹🎹🎤🎺',
				//19 on each side 
				'🎹🎹🎤🎷🎷🎤🎹🎤🎺🥁🥁🎤🥁🥁🎹🥁🎺🎹🥁 A N E O 🎹🎤🎤🎤🎹🎤🎺🎷🎤🎷🎷🎷🎤🎤🎹🥁🎷🎷🎹',
				//20 on each side 
				'🎹🎷🎤🎹🎤🥁🎺🥁🎹🎤🎺🎹🎹🎹🎤🎹🎹🎤🎺🥁 N E 🎷🎷🎤🎺🎤🎺🥁🎺🎹🎹🎷🎺🥁🎤🎺🎤🥁🥁🎺🥁',
				//19 on each side 
				'🎹🎹🎤🎷🎷🎤🎹🎤🎺🥁🥁🎤🥁🥁🎹🥁🎺🎹🥁 A N E O 🎹🎤🎤🎤🎹🎤🎺🎷🎤🎷🎷🎷🎤🎤🎹🥁🎷🎷🎹',
				//18 on each side 
				'🎹🎺🎤🎺🎹🎹🎷🎷🎷🎹🎷🥁🥁🥁🥁🎺🎺🥁 R A N E O U 🎤🎹🎹🎹🎹🎤🥁🎤🎺🎤🎹🎷🎹🥁🎹🎹🎤🎺',
				//17 on each side 
				'🥁🎺🎹🎺🥁🎤🎷🎤🎤🎷🎺🎺🎷🎷🎹🥁🎷 O R A N E O U S 🎺🎹🥁🎺🎤🎹🎷🥁🎤🎺🎷🎹🥁🎺🎹🎺🎺',
				//16 on each side 
				'🎷🥁🎤🎺🎹🥁🎹🎺🥁🎷🎺🎺🎷🎷🎹🥁 P O R A N E O U S N 🎺🎺🎷🎹🎤🥁🎹🎺🎺🥁🎹🎺🎺🎷🥁🥁',
				//15 on each side 
				'🎺🎺🎷🎷🥁🎺🥁🥁🎷🎹🎹🥁🥁🎷🎺 M P O R A N E O U S N E 🥁🥁🎷🎹🥁🎷🎤🎹🎤🎤🎹🥁🥁🎹🎺',
				//14 on each side 
				'🎤🥁🎹🎺🎤🎹🎷🎤🥁🎹🥁🎤🥁🎷 E M P O R A N E O U S N E S 🎹🎤🎷🎤🎹🎤🎹🎤🥁🎤🎺🎤🎤🎹',
				//13 on each side 
				'🎹🎷🎺🎹🥁🎹🎺🎤🥁🎷🎤🥁🎹 T E M P O R A N E O U S N E S S 🎤🎤🎹🎤🥁🎹🎤🎹🎷🎹🎤🎤🎤',
				//12 on each side 
				'🎹🎹🎷🎤🎤🥁🎺🎺🎺🥁🎹🎤 X T E M P O R A N E O U S N E S S E 🎹🎤🥁🎺🎺🥁🎷🎤🎹🎺🎺🎤',
				//11 on each side 
				'🥁🎺🥁🎹🎤🎷🎤🎷🥁🎤🎤 E X T E M P O R A N E O U S N E S S E S 🎷🎹🥁🎷🥁🥁🥁🎤🎹🎺🥁',
			//END EXTEMPORANEOUSNESSES
			//FORETHOUGHTFULNESSES
				//11 on each side 
				'✔️💭🤔💭✔️💭💭✔️📈💭💭 F O R E T H O U G H T F U L N E S S E S 🤔🤔✔️🤔💭📈💭✔️✔️🤔🤔',
				//12 on each side 
				'✔️📈💡🤔🤔📈💭🤔💡🤔🤔🤔 O R E T H O U G H T F U L N E S S E 💭💡💭💭💡🤔📈🤔💡💡🤔💭',
				//13 on each side 
				'📈💭💡📈✔️🤔💭✔️🤔📈✔️💡💭 R E T H O U G H T F U L N E S S 💭💭📈🤔📈✔️💭📈💡💭💭📈💡',
				//14 on each side 
				'💭✔️💭📈🤔📈✔️✔️📈📈🤔🤔✔️🤔 E T H O U G H T F U L N E S 📈💡💡💡🤔🤔💡💡📈📈📈✔️📈📈',
				//15 on each side 
				'💡✔️💭🤔📈🤔📈💡✔️🤔📈🤔✔️✔️🤔 T H O U G H T F U L N E 💡📈💭🤔💭💡💭📈✔️💡📈🤔📈✔️💡',
				//16 on each side 
				'🤔✔️✔️📈📈📈✔️✔️🤔💡✔️✔️✔️💡🤔💭 H O U G H T F U L N 💭📈✔️📈📈📈🤔✔️✔️📈💭💭📈✔️✔️🤔',
				//17 on each side 
				'📈✔️💡💭💭✔️💡🤔📈💭📈💡💭💡📈📈✔️ O U G H T F U L ✔️✔️🤔✔️🤔✔️💡💡📈🤔💡✔️💡💭💭💭🤔',
				//18 on each side 
				'📈💡🤔📈💭💡🤔💡💭💭🤔✔️💡✔️📈💭🤔📈 U G H T F U 💡💡💡💭📈📈📈🤔🤔🤔💭🤔📈🤔✔️🤔📈💭',
				//19 on each side 
				'✔️📈🤔✔️🤔✔️📈✔️✔️🤔📈💡🤔🤔💭✔️✔️💭💭 G H T F 💭✔️💡✔️📈💡💡✔️💡💭💡✔️🤔💡💡📈📈📈💭',
				//20 on each side 
				'💭🤔💭🤔💡✔️💭💡📈📈🤔🤔✔️💡💡✔️📈💡✔️✔️ H T 📈🤔✔️🤔📈✔️✔️📈💭💭💡💡💭✔️✔️✔️💭✔️✔️🤔',
				//19 on each side 
				'✔️📈🤔✔️🤔✔️📈✔️✔️🤔📈💡🤔🤔💭✔️✔️💭💭 G H T F 💭✔️💡✔️📈💡💡✔️💡💭💡✔️🤔💡💡📈📈📈💭',
				//18 on each side 
				'📈💡🤔📈💭💡🤔💡💭💭🤔✔️💡✔️📈💭🤔📈 U G H T F U 💡💡💡💭📈📈📈🤔🤔🤔💭🤔📈🤔✔️🤔📈💭',
				//17 on each side 
				'📈✔️💡💭💭✔️💡🤔📈💭📈💡💭💡📈📈✔️ O U G H T F U L ✔️✔️🤔✔️🤔✔️💡💡📈🤔💡✔️💡💭💭💭🤔',
				//16 on each side 
				'🤔✔️✔️📈📈📈✔️✔️🤔💡✔️✔️✔️💡🤔💭 H O U G H T F U L N 💭📈✔️📈📈📈🤔✔️✔️📈💭💭📈✔️✔️🤔',
				//15 on each side 
				'💡✔️💭🤔📈🤔📈💡✔️🤔📈🤔✔️✔️🤔 T H O U G H T F U L N E 💡📈💭🤔💭💡💭📈✔️💡📈🤔📈✔️💡',
				//14 on each side 
				'💭✔️💭📈🤔📈✔️✔️📈📈🤔🤔✔️🤔 E T H O U G H T F U L N E S 📈💡💡💡🤔🤔💡💡📈📈📈✔️📈📈',
				//13 on each side 
				'📈💭💡📈✔️🤔💭✔️🤔📈✔️💡💭 R E T H O U G H T F U L N E S S 💭💭📈🤔📈✔️💭📈💡💭💭📈💡',
				//12 on each side 
				'✔️📈💡🤔🤔📈💭🤔💡🤔🤔🤔 O R E T H O U G H T F U L N E S S E 💭💡💭💭💡🤔📈🤔💡💡🤔💭',
				//11 on each side 
				'✔️💭🤔💭✔️💭💭✔️📈💭💭 F O R E T H O U G H T F U L N E S S E S 🤔🤔✔️🤔💭📈💭✔️✔️🤔🤔',
			//END FORETHOUGHTFULNESSES
			//END 20 LETTERS

			//18 LETTERS
			//ARCHAEOASTRONOMIES
				//12 on left side, 11 on right side
				'🌗🌓🌗🌓🌔🌘🌒🌘🌗🌒🌒🌖 A R C H A E O A S T R O N O M I E S 🌒🌕🌗🌓🌒🌒🌘🌕🌔🌘🌑',
				//11 on left side; 13 on right side
				'🌑🌔🌕🌗🌗🌓🌖🌓🌑🌖🌔 R C H A E O A S T R O N O M I E S 🌕🌑🌒🌗🌗🌕🌖🌒🌗🌘🌑🌘🌓',
				//10 on left side; 15 on right side
				'🌘🌗🌓🌖🌓🌑🌒🌔🌓🌔 C H A E O A S T R O N O M I E S 🌒🌘🌘🌕🌘🌓🌒🌖🌓🌘🌑🌔🌖🌘🌓',
				//9 on left side; 17 on right side
				'🌑🌗🌘🌑🌔🌓🌒🌑🌔 H A E O A S T R O N O M I E S 🌘🌗🌓🌒🌗🌗🌗🌖🌒🌖🌒🌒🌗🌗🌕🌓🌘',
				//8 on left side; 19 on right side
				'🌖🌑🌖🌔🌕🌔🌑🌖 A E O A S T R O N O M I E S 🌓🌓🌘🌘🌕🌓🌑🌑🌑🌘🌑🌘🌕🌔🌓🌔🌑🌕🌗',
				//7 on left side; 21 on right side
				'🌘🌗🌕🌔🌘🌓🌘 E O A S T R O N O M I E S 🌗🌓🌗🌓🌒🌗🌗🌕🌒🌖🌖🌗🌖🌒🌒🌔🌕🌘🌔🌖🌖',
				//6 on left side, 23 on right side
				'🌘🌖🌔🌗🌒🌘 O A S T R O N O M I E S 🌔🌒🌓🌓🌗🌓🌑🌗🌓🌖🌒🌓🌓🌓🌓🌔🌘🌒🌕🌖🌔🌗🌕',
				//5 on left side, 25 on right side
				'🌒🌕🌕🌘🌘 A S T R O N O M I E S 🌖🌒🌗🌖🌘🌘🌒🌒🌔🌕🌒🌔🌓🌔🌓🌘🌖🌑🌖🌘🌗🌓🌒🌓🌘',
				//4 on left side, 27 on right side
				'🌔🌕🌕🌗 S T R O N O M I E S 🌘🌔🌓🌒🌖🌓🌖🌗🌔🌓🌒🌗🌑🌑🌘🌓🌑🌑🌗🌖🌓🌒🌖🌘🌑🌘🌔',
				//3 on left side, 29 on right side
				'🌑🌒🌗 T R O N O M I E S 🌗🌒🌕🌘🌒🌓🌒🌖🌗🌘🌑🌘🌕🌖🌔🌔🌓🌔🌓🌔🌗🌓🌓🌖🌒🌑🌑🌕🌕',
				//2 on left side, 31 on right side
				'🌒🌓 R O N O M I E S 🌑🌒🌒🌘🌑🌕🌗🌒🌘🌖🌘🌘🌕🌕🌔🌓🌒🌔🌖🌖🌕🌒🌗🌖🌘🌒🌒🌔🌕🌒🌔',
				//1 on left side, 33 on right side
				'🌔 O N O M I E S 🌓🌕🌕🌔🌘🌔🌔🌒🌒🌓🌓🌖🌓🌒🌑🌑🌕🌕🌗🌒🌖🌑🌑🌘🌔🌖🌖🌔🌒🌖🌘🌖🌕',
				//1 on left side, 34 on right side
				'🌓 N O M I E S 🌑🌘🌗🌗🌘🌗🌘🌗🌓🌘🌒🌓🌘🌑🌕🌗🌓🌕🌔🌒🌖🌓🌓🌕🌘🌖🌖🌗🌘🌑🌑🌗🌕🌑',
				//1 on left side, 35 on right side
				'🌕 O M I E S 🌒🌓🌔🌕🌖🌒🌓🌘🌔🌖🌕🌖🌔🌒🌖🌘🌖🌕🌕🌗🌘🌕🌓🌖🌔🌓🌖🌓🌒🌑🌑🌕🌓🌓🌖',
				//1 on left side, 36 on right side
				'🌖 M I E S 🌕🌕🌓🌘🌑🌓🌕🌕🌘🌖🌘🌖🌗🌘🌑🌑🌗🌕🌑🌒🌑🌔🌕🌔🌔🌗🌒🌗🌑🌑🌘🌓🌑🌑🌗🌖',
				//1 on left side, 37 on right side
				'🌕 I E S 🌗🌒🌔🌖🌘🌑🌕🌖🌔🌑🌗🌕🌘🌖🌔🌔🌕🌒🌔🌓🌕🌖🌗🌖🌕🌓🌓🌗🌓🌑🌗🌓🌖🌒🌓🌓🌗',
				//1 on left side, 38 on right side
				'🌒 E S 🌒🌘🌗🌖🌔🌑🌘🌖🌔🌕🌘🌓🌗🌒🌓🌘🌗🌖🌖🌖🌖🌘🌑🌖🌑🌒🌖🌕🌓🌑🌑🌑🌘🌑🌘🌕🌓🌑',
				//1 on left  side, 39 on right side
				'🌑 S 🌘🌘🌘🌕🌖🌗🌕🌖🌖🌔🌕🌒🌒🌓🌖🌗🌓🌘🌔🌗🌕🌘🌔🌑🌒🌘🌘🌘🌒🌕🌗🌓🌒🌒🌘🌕🌔🌘🌑',
			//END ARCHAEOASTRONOMIES
			//BLOODTHIRSTINESSES
				//1 on left side, 39 on right side
				'😡 S 👹😈😡👹😈👺👺😡👹🦇👹🦇😈😈😡😡😡👺👺👺😡😈👹😡😡👺😈🦇👹🦇🦇👺😈👺😡🦇😡🦇👹',
				//1 on left side, 38 on right side
				'👺 E S 😈😈👹👹👺👹🦇🦇🦇😈😡👺😈😈👹🦇😈😈😡🦇😡🦇👹🦇🦇😡😡😈🦇👺👹👺😈😈👹😈👺👹',
				//1 on left side, 37 on right side
				'👺 S E S 👺😈😈👺😈😈😡😈👹👹👺👺🦇👹😈👹👺👺😡🦇😡🦇👺😡👹👺😡🦇👺😡🦇😈😈😈😡👺😡',
				//1 on left side, 36 on right side
				'👹 S S E S 😡👺👺🦇🦇👺😡🦇👹😈👹😡👹😈🦇😈😡🦇🦇😡👺👹😈🦇😡👹👹👺😈👹👹😡👺🦇👹👹',
				//1 on left side, 35 on right side
				'🦇 E S S E S 👹👺👹👹👺🦇🦇😈😈👺😈😈😈😡😡👺😈😡🦇👹🦇👹👺🦇👺😈👺👺👹🦇👺👺🦇👺🦇',
				//1 on left side, 34 on right side
				'😡 N E S S E S 😡👺🦇👹👺🦇👹👹😡😡😈👹😡😈👹👺😈🦇😡👹🦇😈🦇🦇😈👹😡😈🦇😡👺🦇😡👹',
				//1 on left side, 33 on right side
				'👺 I N E S S E S 😡🦇👹👹👺😈👺😈😈😈😡👹😡😈👺🦇😡👹👹😡😈👹🦇👺😈👺👺👹👺🦇😡👺👺',
				//2 on left side, 31 on right side
				'🦇😈 T I N E S S E S 👹🦇👺👹🦇🦇😡😡👺👹👺😈👺👹👹🦇😈👺👹👹😡😡👺😡😈😈👺🦇👹👺😈',
				//3 on left side, 29 on right side
				'👺👺😈 S T I N E S S E S 🦇🦇😡😡🦇👹😈😈👺🦇🦇👺👺😡😡👺👹🦇👺😡😈😡🦇🦇😈🦇👹😈🦇',
				//4 on left side, 27 on right side
				'👹👺👺😡 R S T I N E S S E S 👹👹😈😡😡👺👺😈😡👺🦇👹🦇😡👹👹😡👺🦇👺😡😡👹😈😡👹😈',
				//5 on left side, 25 on right side
				'😈👹👹😈😈 I R S T I N E S S E S 🦇🦇👺👺😈👹🦇👺👺👺👺😈👹😈🦇😡😡🦇😈👺😈👺👺👹😡',
				//6 on left side, 23 on right side
				'👹😡🦇😡😈👹 H I R S T I N E S S E S 👺🦇👺😡👹😈😈😡🦇👺😡😡😡🦇👺👺👹🦇😈🦇😡👹😡',
				//7 on left side, 21 on right side
				'😈🦇🦇👺👹🦇😡 T H I R S T I N E S S E S 😡👹👹🦇👹👹🦇😡🦇👺🦇😡👺😈👹👹👹😡👹👺😡',
				//8 on left side, 19 on right side
				'😡😡😡👹🦇👺😈🦇 D T H I R S T I N E S S E S 👺👺🦇😈😡😈👺😈🦇👹😡👹👺😡😡👹👺😡👹',
				//9 on left side, 17 on right side
				'😈👹🦇👹👹👹😈👺👹 O D T H I R S T I N E S S E S 👺😈😡👺🦇👹👺😈😡🦇👹😡😡😈😈😈👹',
				//10 on left side, 15 on right side
				'🦇🦇🦇👺👺👺😈👺😡😡 O O D T H I R S T I N E S S E S 👺😈👺😈😡👹😈👺🦇😡👺😡😡👹👺',
				//11 on left side, 13 on right side
				'🦇🦇👹👺😡😈😈😈👹😡😈 L O O D T H I R S T I N E S S E S 🦇👹👹😡👹😈😡👹👺😡👺😈😈',
				//12 on left side, 11 on right side
				'🦇👹🦇😈👹😈👺🦇😡👺👹😈 B L O O D T H I R S T I N E S S E S 😈😈😡👺🦇🦇👺👺😈😈👹',
			//END BLOODTHIRSTINESSES
			//CANTANKEROUSNESSES
				//12 on left side, 11 on right side
				'🚫🚫🚫🙅🏽‍♂️✋🏼🚫😤🙅🏽‍♂️🙅🏽‍♂️🙅🏽‍♂️😤✋🏼 C A N T A N K E R O U S N E S S E S ✋🏼🚫👎🏾🚫😤👎🏾🚫🚫👎🏾🙅🏽‍♂️',
				//11 on left side; 13 on right side
				'🙅🏽‍♂️✋🏼😤🚫🚫🚫✋🏼✋🏼🙅🏽‍♂️🙅🏽‍♂️✋🏼 A N T A N K E R O U S N E S S E S ✋🏼🚫🙅🏽‍♂️🙅🏽‍♂️✋🏼🚫😤😤😤✋🏼😤✋🏼',
				//10 on left side; 15 on right side
				'🚫😤🙅🏽‍♂️🙅🏽‍♂️🙅🏽‍♂️🙅🏽‍♂️🙅🏽‍♂️😤😤🚫 N T A N K E R O U S N E S S E S 🚫👎🏾🙅🏽‍♂️👎🏾🚫🚫🙅🏽‍♂️🙅🏽‍♂️👎🏾😤✋🏼🙅🏽‍♂️🚫🚫',
				//9 on left side; 17 on right side
				'😤✋🏼🚫✋🏼🙅🏽‍♂️😤👎🏾😤👎🏾 T A N K E R O U S N E S S E S ✋🏼✋🏼🚫🙅🏽‍♂️😤😤😤😤✋🏼👎🏾👎🏾😤🚫😤🚫🚫',
				//8 on left side; 19 on right side
				'👎🏾✋🏼👎🏾✋🏼👎🏾🙅🏽‍♂️🚫🚫 A N K E R O U S N E S S E S 🚫😤✋🏼😤🙅🏽‍♂️😤👎🏾😤✋🏼😤✋🏼👎🏾✋🏼👎🏾🚫✋🏼😤👎🏾',
				//7 on left side; 21 on right side
				'🚫😤🙅🏽‍♂️👎🏾✋🏼🚫👎🏾 N K E R O U S N E S S E S 😤👎🏾✋🏼🙅🏽‍♂️🚫🚫👎🏾✋🏼🙅🏽‍♂️🙅🏽‍♂️😤🙅🏽‍♂️✋🏼🙅🏽‍♂️😤✋🏼🚫🙅🏽‍♂️✋🏼👎🏾',
				//6 on left side, 23 on right side
				'😤✋🏼😤🙅🏽‍♂️🙅🏽‍♂️🚫 K E R O U S N E S S E S 🚫🙅🏽‍♂️✋🏼✋🏼👎🏾🚫👎🏾😤🙅🏽‍♂️👎🏾👎🏾😤🚫✋🏼🚫👎🏾🙅🏽‍♂️🚫✋🏼🙅🏽‍♂️👎🏾🚫',
				//5 on left side, 25 on right side
				'🚫🙅🏽‍♂️😤✋🏼✋🏼 E R O U S N E S S E S 🚫🙅🏽‍♂️🚫😤😤👎🏾🙅🏽‍♂️😤😤🙅🏽‍♂️🚫🙅🏽‍♂️👎🏾👎🏾😤🙅🏽‍♂️👎🏾👎🏾🙅🏽‍♂️✋🏼🙅🏽‍♂️👎🏾👎🏾✋🏼',
				//4 on left side, 27 on right side
				'✋🏼😤🚫🚫 R O U S N E S S E S 🚫👎🏾✋🏼✋🏼🙅🏽‍♂️✋🏼🙅🏽‍♂️🚫😤🙅🏽‍♂️😤😤👎🏾🙅🏽‍♂️✋🏼🚫✋🏼👎🏾🙅🏽‍♂️✋🏼✋🏼👎🏾🚫😤🙅🏽‍♂️🙅🏽‍♂️',
				//3 on left side, 29 on right side
				'🙅🏽‍♂️😤😤 O U S N E S S E S 😤✋🏼✋🏼👎🏾✋🏼😤🚫✋🏼👎🏾🙅🏽‍♂️✋🏼😤✋🏼🚫😤👎🏾👎🏾👎🏾✋🏼🚫✋🏼🚫🚫🚫👎🏾✋🏼🙅🏽‍♂️✋🏼',
				//2 on left side, 30 on right side
				'😤🙅🏽‍♂️ U S N E S S E S 😤🙅🏽‍♂️👎🏾🚫😤🚫✋🏼😤🚫🚫✋🏼👎🏾✋🏼👎🏾🚫🙅🏽‍♂️🚫✋🏼🚫👎🏾👎🏾✋🏼👎🏾✋🏼👎🏾🚫🙅🏽‍♂️😤😤😤',
				//1 on left side, 32 on right side
				'🙅🏽‍♂️ S N E S S E S 👎🏾🚫✋🏼👎🏾😤🚫✋🏼🚫👎🏾😤✋🏼👎🏾✋🏼✋🏼🙅🏽‍♂️✋🏼🙅🏽‍♂️🙅🏽‍♂️🙅🏽‍♂️👎🏾✋🏼👎🏾🚫👎🏾🚫✋🏼😤👎🏾✋🏼👎🏾🚫👎🏾',
				//1 on left side, 36 on right side
				'😤 N E S S E S 🙅🏽‍♂️✋🏼👎🏾😤😤✋🏼✋🏼👎🏾👎🏾✋🏼👎🏾✋🏼🚫🙅🏽‍♂️👎🏾😤👎🏾🙅🏽‍♂️🙅🏽‍♂️🚫😤✋🏼🚫😤😤🙅🏽‍♂️🙅🏽‍♂️🙅🏽‍♂️😤✋🏼✋🏼🙅🏽‍♂️👎🏾',
				//1 on left side, 37 on right side
				'✋🏼 E S S E S ✋🏼🙅🏽‍♂️🚫🙅🏽‍♂️🙅🏽‍♂️✋🏼👎🏾🚫✋🏼😤😤👎🏾🙅🏽‍♂️✋🏼🚫✋🏼👎🏾✋🏼🚫😤✋🏼😤✋🏼🙅🏽‍♂️😤👎🏾✋🏼🚫🙅🏽‍♂️🙅🏽‍♂️🚫👎🏾👎🏾🚫',
				//1 on left side, 38 on right side
				'🙅🏽‍♂️ S S E S 🚫✋🏼👎🏾😤✋🏼🙅🏽‍♂️😤✋🏼✋🏼👎🏾😤🚫😤🚫🙅🏽‍♂️🚫😤✋🏼👎🏾😤😤😤🚫🚫😤🙅🏽‍♂️🙅🏽‍♂️😤✋🏼🙅🏽‍♂️👎🏾🙅🏽‍♂️🙅🏽‍♂️🚫👎🏾',
				//1 on left side, 39 on right side
				'✋🏼 S E S 🙅🏽‍♂️🚫✋🏼🙅🏽‍♂️😤🙅🏽‍♂️✋🏼👎🏾🚫😤✋🏼🚫🚫✋🏼✋🏼🙅🏽‍♂️🚫😤🚫👎🏾👎🏾🙅🏽‍♂️😤🙅🏽‍♂️🚫✋🏼😤😤😤😤👎🏾🚫👎🏾🙅🏽‍♂️🙅🏽‍♂️🚫',
				//1 on left side, 40 on right side
				'✋🏼 E S 😤✋🏼🙅🏽‍♂️👎🏾🙅🏽‍♂️🙅🏽‍♂️✋🏼🚫👎🏾🙅🏽‍♂️🚫🚫😤✋🏼🙅🏽‍♂️✋🏼😤🙅🏽‍♂️🙅🏽‍♂️😤✋🏼😤😤🚫✋🏼😤✋🏼👎🏾✋🏼👎🏾🙅🏽‍♂️🙅🏽‍♂️🙅🏽‍♂️✋🏼😤🙅🏽‍♂️😤',
				//1 on left  side, 41 on right side
				'✋🏼 S ✋🏼🙅🏽‍♂️🚫👎🏾🚫✋🏼🙅🏽‍♂️✋🏼👎🏾🙅🏽‍♂️👎🏾😤😤🙅🏽‍♂️🙅🏽‍♂️🙅🏽‍♂️🙅🏽‍♂️✋🏼👎🏾✋🏼🚫👎🏾🚫✋🏼😤🙅🏽‍♂️✋🏼✋🏼👎🏾✋🏼✋🏼👎🏾😤🙅🏽‍♂️🚫✋🏼🙅🏽‍♂️🚫',
			//END CANTANKEROUSNESSES
			//DENOMINALATIONISMS
				//1 on left side, 39 on right side
				'💴 S 💵💵💶💴💳💵💶💴💷💳💶💵💶💳💷💴💷💴💷💷💴💳💳💶💵💴💶💶💴💳💷💵💵💷💴💴💳💷',
				//1 on left side, 38 on right side
				'💴 M S 💳💴💵💴💳💵💷💵💵💷💳💳💶💳💷💷💳💵💵💷💳💴💶💷💴💷💴💳💳💳💵💷💷💴💴💷💶',
				//1 on left side, 37 on right side
				'💶 S M S 💵💷💵💶💳💳💴💳💴💶💷💳💵💵💴💶💶💶💶💵💴💴💴💴💶💳💵💴💷💴💵💷💷💶💳💷',
				//1 on left side, 36 on right side
				'💵 I S M S 💷💶💵💴💳💳💳💶💵💴💳💵💵💵💳💵💴💵💴💷💵💷💳💶💵💴💶💳💳💵💳💷💳💶💶',
				//1 on left side, 35 on right side
				'💳 N I S M S 💵💵💵💴💷💳💷💶💶💵💶💵💶💵💴💴💳💴💳💳💶💳💶💶💶💷💵💶💶💴💶💶💵💵',
				//1 on left side, 34 on right side
				'💶 O N I S M S 💶💶💵💳💵💵💵💵💵💶💴💴💷💵💷💷💴💷💵💳💷💳💶💶💷💷💴💵💴💵💴💴💳',
				//1 on left side, 33 on right side
				'💵 I O N I S M S 💳💷💳💵💴💵💴💵💶💳💶💳💴💷💳💶💶💴💷💶💶💵💵💷💶💳💴💳💶💵💳💳',
				//2 on left side, 31 on right side
				'💷💷 T I O N I S M S 💶💴💵💴💶💶💳💳💶💳💳💶💶💷💳💷💴💷💶💳💳💷💶💳💷💴💵💴💷💴',
				//3 on left side, 29 on right side
				'💷💷💳 A T I O N I S M S 💵💴💳💳💳💳💷💵💷💶💷💷💶💶💶💴💵💷💷💴💴💴💴💴💶💶💵💶',
				//4 on left side, 27 on right side
				'💶💵💳💵 L A T I O N I S M S 💷💳💶💴💴💴💷💳💷💴💶💴💵💴💷💷💴💵💳💵💳💳💵💷💴💷',
				//5 on left side, 25 on right side
				'💴💶💴💵💳 A L A T I O N I S M S 💳💶💴💵💵💷💵💷💴💳💶💶💶💴💶💵💳💷💳💶💷💶💴💷',
				//6 on left side, 23 on right side
				'💶💳💵💶💵💴 N A L A T I O N I S M S 💳💳💳💷💶💶💶💳💳💷💳💶💵💳💷💷💴💵💳💶💶💷',
				//7 on left side, 21 on right side
				'💶💵💴💴💶💴💴 I N A L A T I O N I S M S 💶💳💷💳💴💴💳💵💳💴💴💳💵💳💷💶💵💳💳💶',
				//8 on left side, 19 on right side
				'💵💵💶💳💶💵💴💵 M I N A L A T I O N I S M S 💶💶💶💵💶💶💵💵💶💵💳💶💷💷💷💷💴💵',
				//9 on left side, 17 on right side
				'💳💶💶💳💶💵💴💴💴 O M I N A L A T I O N I S M S 💴💳💳💳💳💳💴💶💷💷💷💵💵💳💴💴',
				//10 on left side, 15 on right side
				'💶💷💵💶💳💵💵💶💳💷 N O M I N A L A T I O N I S M S 💶💷💵💷💷💶💷💴💳💶💶💴💷💷',
				//11 on left side, 13 on right side
				'💷💵💶💴💶💶💶💶💶💳💶 E N O M I N A L A T I O N I S M S 💷💴💶💷💵💷💷💴💴💶💷💳',
				//12 on left side, 11 on right side
				'💷💵💴💶💶💷💵💳💴💳💶💷 D E N O M I N A L A T I O N I S M S 💷💳💷💳💴💷💵💳💳💶',
			//END DENOMINALATIONISMS
			//EVAPOTRANSPIRATION
				//12 on left side, 11 on right side
				'⛅☁️🌤️💧💧💧💧💧💧🌤️🌤️💧 E V A P O T R A N S P I R A T I O N 🌤️💧🌥️💧⛅⛅🌤️💧💧💧⛅',
				//11 on left side; 13 on right side
				'🌤️⛅☁️🌤️☁️⛅☁️☁️🌤️🌥️🌤️ V A P O T R A N S P I R A T I O N 🌤️🌥️💧⛅⛅☁️🌥️🌤️🌥️☁️🌥️💧☁️',
				//10 on left side; 15 on right side
				'☁️💧☁️🌥️☁️⛅💧💧⛅☁️ A P O T R A N S P I R A T I O N 🌥️⛅🌤️💧🌤️💧🌤️🌤️💧💧🌤️🌤️⛅🌤️🌥️',
				//9 on left side; 17 on right side
				'🌥️☁️🌤️🌥️🌤️⛅🌤️🌤️☁️ P O T R A N S P I R A T I O N 🌥️⛅🌤️⛅🌤️🌥️⛅🌥️🌥️⛅💧🌤️🌤️💧💧⛅☁️',
				//8 on left side; 19 on right side
				'🌤️⛅🌤️☁️⛅☁️☁️🌥️ O T R A N S P I R A T I O N 🌥️☁️⛅💧💧☁️☁️💧🌤️🌥️🌤️🌥️🌤️🌥️⛅⛅🌤️🌤️🌥️',
				//7 on left side; 21 on right side
				'🌤️☁️🌤️⛅💧🌥️🌥️ T R A N S P I R A T I O N 🌥️☁️☁️🌤️⛅🌥️🌥️☁️🌤️💧⛅🌤️☁️🌥️🌤️☁️🌥️☁️🌥️🌤️☁️',
				//6 on left side, 23 on right side
				'⛅🌤️💧🌤️💧🌤️ R A N S P I R A T I O N 💧💧☁️🌥️🌥️🌤️🌤️⛅☁️🌤️☁️⛅☁️☁️🌤️🌤️⛅🌥️🌤️☁️🌤️⛅☁️',
				//5 on left side, 25 on right side
				'🌥️💧⛅💧🌤️ A N S P I R A T I O N 💧💧💧🌤️🌥️🌤️🌤️⛅💧☁️⛅💧💧💧🌤️⛅🌤️☁️💧💧🌥️☁️☁️🌥️☁️',
				//4 on left side, 27 on right side
				'⛅💧🌥️☁️ N S P I R A T I O N 💧💧☁️🌤️💧🌤️⛅🌥️⛅💧💧🌥️⛅🌤️💧🌥️🌥️💧💧🌤️💧⛅💧💧☁️💧🌤️' ,
				//3 on left side, 29 on right side
				'🌤️💧🌥️ S P I R A T I O N 🌤️💧☁️🌥️☁️⛅💧🌤️🌥️🌤️⛅🌤️☁️🌥️🌥️🌤️🌥️⛅🌥️⛅🌤️💧☁️⛅🌤️🌥️💧🌤️☁️',
				//2 on left side, 31 on right side
				'🌥️💧P I R A T I O N ⛅💧💧⛅🌥️⛅🌤️⛅🌤️☁️⛅💧🌥️⛅🌥️🌤️☁️💧⛅💧🌥️☁️🌥️💧💧🌥️🌥️🌥️💧⛅💧',
				//1 on left side, 33 on right side
				'🌥️ I R A T I O N ⛅⛅☁️☁️⛅🌤️💧🌤️🌤️☁️☁️🌥️⛅⛅⛅💧☁️⛅🌤️☁️💧💧☁️🌥️🌥️☁️💧💧⛅🌤️💧🌥️💧',
				//1 on left side, 34 on right side
				'☁️ R A T I O N ☁️🌥️🌥️☁️☁️⛅⛅💧🌤️🌤️☁️🌥️🌥️⛅⛅🌤️☁️🌤️🌤️🌤️💧🌤️🌥️☁️💧☁️🌤️☁️⛅⛅☁️☁️💧⛅',
				//1 on left side, 35 on right side
				'🌥️ A T I O N 🌤️⛅⛅🌥️⛅⛅🌤️⛅💧⛅☁️⛅☁️⛅🌥️🌥️🌥️🌤️💧💧☁️💧🌥️🌥️💧🌥️🌤️💧⛅☁️☁️⛅🌥️🌥️🌤️',
				//1 on left side, 36 on right side
				'🌥️ T I O N 🌥️🌥️☁️⛅⛅☁️🌥️💧🌥️⛅💧🌥️⛅🌥️☁️☁️💧☁️💧☁️🌤️🌤️☁️🌤️🌥️🌥️☁️🌥️⛅☁️🌥️🌥️💧💧🌤️⛅',
				//1 on left side, 37 on right side
				'🌤️ I O N ☁️💧⛅💧🌤️⛅🌥️🌤️⛅⛅💧💧⛅☁️🌤️💧🌥️🌤️⛅⛅💧⛅⛅🌥️🌥️🌤️☁️💧🌤️🌤️🌤️☁️⛅🌥️🌥️🌤️🌥️',
				//1 on left side, 38 on right side
				'🌤️ O N ⛅☁️🌥️⛅🌥️🌤️💧☁️⛅🌤️⛅🌥️🌤️💧⛅💧☁️⛅🌥️⛅⛅💧☁️⛅☁️🌤️🌤️🌥️💧☁️🌥️🌤️☁️🌤️💧💧🌥️🌤️',
				//1 on left  side, 39 on right side
				'🌤️ N 💧💧⛅💧⛅🌥️🌤️⛅⛅☁️🌥️⛅⛅☁️🌤️🌥️🌥️🌥️🌤️☁️☁️💧☁️💧💧🌤️💧💧☁️🌤️💧🌤️☁️💧⛅⛅☁️🌤️☁️',
			//END EVAPOTRANSPIRATION
			//FEEBLEMINDEDNESSES
				//1 on left side, 39 on right side
				'😕 S ❓💭⁉️⁉️😕❓💭🤔⁉️😕❓💭🤔⁉️⁉️🤔💭⁉️💭🤔❓🤔😕💭⁉️❓🤔🤔❓😕💭❓😕😕❓💭💭🤔😕',
				//1 on left side, 38 on right side
				'😕 E S 😕❓😕❓💭💭😕🤔💭❓🤔😕⁉️😕💭🤔💭🤔💭🤔❓🤔⁉️🤔💭💭🤔💭🤔⁉️🤔🤔😕🤔😕❓😕❓',
				//1 on left side, 37 on right side
				'⁉️ S E S 🤔🤔❓😕😕😕❓⁉️🤔⁉️❓⁉️💭😕😕😕💭💭❓❓❓😕🤔😕💭😕⁉️❓😕🤔😕❓🤔😕⁉️🤔🤔',
				//1 on left side, 36 on right side
				'❓ S S E S 🤔💭🤔💭💭❓⁉️🤔⁉️😕😕😕⁉️😕❓💭🤔💭❓😕❓💭💭❓😕💭⁉️💭❓💭⁉️😕⁉️❓💭⁉️',
				//1 on left side, 35 on right side
				'💭 E S S E S 🤔😕⁉️⁉️⁉️😕⁉️🤔❓💭⁉️🤔💭💭❓🤔💭❓⁉️⁉️💭⁉️⁉️❓😕🤔⁉️🤔😕🤔🤔😕🤔🤔🤔',
				//1 on left side, 34 on right side
				'❓ N E S S E S 🤔⁉️💭⁉️😕😕🤔🤔💭⁉️😕💭⁉️💭❓😕😕💭😕⁉️❓😕💭🤔🤔💭🤔😕⁉️⁉️🤔🤔❓🤔',
				//1 on left side, 33 on right side
				'⁉️ D N E S S E S ❓⁉️😕😕💭💭❓⁉️⁉️⁉️😕❓💭😕❓🤔😕😕❓🤔💭😕🤔💭😕💭🤔😕❓🤔😕❓🤔',
				//2 on left side, 31 on right side
				'🤔❓ E D N E S S E S 😕😕😕🤔😕💭😕😕😕😕💭❓😕🤔😕⁉️🤔😕⁉️😕😕❓😕⁉️💭💭🤔💭😕⁉️🤔',
				//3 on left side, 29 on right side
				'⁉️😕❓ D E D N E S S E S ❓❓⁉️😕⁉️💭🤔⁉️⁉️💭⁉️❓💭😕😕💭💭🤔💭🤔🤔🤔💭❓❓🤔😕❓💭',
				//4 on left side, 27 on right side
				'💭😕🤔🤔 N D E D N E S S E S ⁉️⁉️😕🤔⁉️⁉️💭⁉️⁉️😕❓❓😕❓😕❓❓❓❓😕😕❓😕💭🤔🤔❓',
				//5 on left side, 25 on right side
				'💭⁉️😕❓❓ I N D E D N E S S E S 💭❓😕❓❓💭⁉️😕⁉️❓😕⁉️❓⁉️💭⁉️😕💭🤔🤔😕💭😕🤔😕',
				//6 on left side, 23 on right side
				'😕🤔💭💭⁉️🤔 M I N D E D N E S S E S 🤔⁉️😕💭🤔💭❓⁉️❓💭😕😕😕💭🤔⁉️⁉️🤔🤔❓❓❓😕',
				//7 on left side, 21 on right side
				'🤔⁉️❓💭⁉️🤔❓E M I N D E D N E S S E S ❓😕🤔⁉️💭🤔⁉️🤔🤔⁉️💭🤔💭⁉️💭❓💭😕😕⁉️🤔',
				//8 on left side, 19 on right side
				'😕😕🤔⁉️⁉️😕🤔🤔 L E M I N D E D N E S S E S ⁉️💭🤔🤔❓😕💭❓❓🤔😕😕💭😕🤔💭❓💭🤔',
				//9 on left side, 17 on right side
				'🤔⁉️🤔⁉️🤔💭❓🤔🤔 B L E M I N D E D N E S S E S 💭⁉️💭🤔💭💭🤔🤔😕⁉️🤔❓💭⁉️❓⁉️⁉️',
				//10 on left side, 15 on right side
				'⁉️❓⁉️🤔🤔⁉️❓💭🤔⁉️ E B L E M I N D E D N E S S E S ❓⁉️⁉️🤔💭⁉️❓❓😕🤔💭🤔🤔😕⁉️',
				//11 on left side, 13 on right side
				'💭💭❓❓⁉️😕💭🤔❓💭💭 E E B L E M I N D E D N E S S E S ⁉️😕🤔⁉️😕❓💭❓😕😕🤔❓😕',
				//12 on left side, 11 on right side
				'❓⁉️🤔🤔🤔💭🤔😕⁉️😕🤔 F E E B L E M I N D E D N E S S E S 💭🤔❓😕🤔😕🤔😕🤔⁉️💭💭',
			//END FEEBLEMINDEDNESSES
			//END 18 LETTERS

			//17 LETTERS
			//ATRABILIOUSNESSES
				//12 on left side, 11 on right side
				'😢😭😩😔😭☹️☹️😩☹️😩😔😭 A T R A B I L I O U S N E S S E S 😔☹️😔😢😔😩😔☹️😔😢😔',
				//13 on left side; 11 on right side
				'😔😩☹️😔😩😢😩😩☹️😢😭😔😭 T R A B I L I O U S N E S S E S 😩😩😩☹️😭😢😢☹️😩😔😢',
				//15 on left side; 10 on right side
				'😭😭☹️😢☹️😢😭☹️😩😩😢☹️😭☹️😭 R A B I L I O U S N E S S E S 😢😢😩😔☹️😭😢😭☹️😩',
				//17 on left side; 9 on right side
				'😢😩☹️😭😭😩☹️😔😔😭☹️😭😭😩😢😩☹️ A B I L I O U S N E S S E S 😭☹️😩😩😭😢😩😔☹️',
				//19 on left side; 8 on right side
				'😢☹️😩😩☹️😭😔😔😩😭😭😢😭☹️☹️😩😢😭☹️ B I L I O U S N E S S E S 😔😭😢😔😩☹️😩😢',
				//21 on left side; 7 on right side
				'😩☹️😭😔😔😢😭☹️😢😔😢☹️😔😢😩😢☹️😔😭☹️☹️ I L I O U S N E S S E S 😩😭😩😢😭☹️😩',
				//23 on left side, 6 on right side
				'😩☹️😭😢😔☹️😩😢☹️😔☹️😢😢😭😢😭☹️☹️😩😩😩😩😔 L I O U S N E S S E S ☹️😔😭☹️😭😭',
				//25 on left side, 5 on right side
				'😩😩😭😭😩😭😢😔😢☹️😭😩😔😭☹️☹️😩😩☹️☹️😔☹️😩😩😢 I O U S N E S S E S ☹️😭😭☹️😢',
				//27 on left side, 4 on right side
				'😭😭😩😩😩😔😔😩😢☹️☹️😢☹️😭😔😢😢😭☹️😩😭😔😢😩☹️☹️☹️ O U S N E S S E S 😢☹️😔😔',
				//29 on left side, 3 on right side
				'☹️😩😔😢😔😔😔😩😩😭😭😔☹️😭😔😔😩☹️😢😔☹️😔😢😔😔😔😩😔☹️ U S N E S S E S 😢☹️😔',
				//31 on left side, 2 on right side
				'😔😭😭😩😢😔☹️😭😭☹️😢😩😩😔😔☹️😭😭😭😢😩😭😢😔😢😔😩☹️😩😢😩 S N E S S E S 😭😩',
				//33 on left side, 1 on right side
				'☹️☹️😔😭☹️😔☹️😢😭😔😔😔😔😔☹️☹️😢☹️😔😔☹️😩😩☹️😭😭😔😢☹️😔☹️☹️😢 N E S S E S ☹️',
				//34 on left side, 1 on right side
				'😢😢😢😢😩😢😭😢😩😔😔😔😔😩😢😢😢😔😢😢😭☹️☹️😔😔😔😔😭😔☹️☹️😭😔😔 E S S E S 😔',
				//35 on left side, 1 on right side
				'😔😔😩☹️😭☹️😩😭😔☹️😭😢☹️😭😭😩😢😢😭😢😭☹️😭😭☹️😭☹️😩😢😩😔😢😔☹️😔 S S E S 😔',
				//36 on left side, 1 on right side
				'😭☹️😔😔😭😢😭😭😢😔😢😢😩😔😔😩☹️😭😔☹️☹️☹️☹️☹️☹️😩☹️☹️😩☹️😔😢☹️☹️😭😔 S E S 😔',
				//37 on left side, 1 on right side
				'😭😔😩😔😢😭😔😭☹️☹️😭😩☹️☹️😔😩😩☹️😩☹️😔😩☹️😩☹️😩☹️☹️😩😢😢😔😢😢☹️😭😭 E S ☹️',
				//38 on left side, 1 on right side
				'😔😭😔😭☹️☹️😭😔😩😢😩😢😭😔☹️😭😔😩😔😭☹️😩😢😩😭😢😔☹️☹️😭😩😢😭😔😢😔😭😢 S 😭',
			//END ATRABILIOUSNESSES
			//BLOODGUILTINESSES
				//38 on left side, 1 on right side
				'⚔️💣⚔️💣🗡️⚔️⚔️☠️☠️💣🔪🔪💣⚔️⚔️⚔️💣☠️☠️💣🔪🔪☠️☠️⚔️💣⚔️🗡️🗡️🔪☠️☠️⚔️🔪🗡️🔪🔪💣 S 🔪',
				//37 on left side, 1 on right side
				'🔪💣🗡️⚔️⚔️🗡️🔪🗡️💣🗡️🗡️🗡️💣🗡️☠️🔪☠️🗡️☠️⚔️🗡️☠️💣🗡️🔪⚔️💣🔪💣⚔️🔪⚔️💣🔪☠️💣💣 E S ⚔️',
				//36 on left side, 1 on right side
				'🗡️🔪🗡️🔪☠️⚔️⚔️☠️⚔️☠️💣☠️💣🗡️🗡️🗡️💣🔪💣⚔️💣☠️💣💣🗡️💣💣💣🗡️☠️⚔️🔪⚔️⚔️☠️🔪 S E S 🗡️',
				//35 on left side, 1 on right side
				'⚔️☠️🔪☠️💣🗡️🗡️⚔️☠️💣☠️💣⚔️🔪💣⚔️☠️🗡️☠️🔪💣🗡️☠️💣🔪⚔️☠️🔪🗡️🗡️🗡️🔪🔪🗡️💣 S S E S ☠️',
				//34 on left side, 1 on right side
				'☠️☠️☠️💣🔪💣⚔️☠️☠️🔪🗡️☠️💣☠️⚔️☠️🗡️🔪💣⚔️⚔️🔪🗡️☠️🗡️🔪🗡️⚔️☠️🔪🗡️⚔️🗡️🔪 E S S E S 🔪',
				//33 on left side, 1 on right side
				'🔪☠️⚔️☠️💣🔪🔪💣🗡️💣☠️💣🔪⚔️💣⚔️🗡️☠️🔪🔪☠️☠️🔪💣💣💣⚔️⚔️☠️☠️☠️🗡️⚔️ N E S S E S 🔪',
				//31 on left side, 2 on right side
				'🗡️⚔️💣💣🔪🔪⚔️🔪💣🗡️☠️⚔️⚔️🗡️🗡️🔪💣🗡️💣⚔️🔪☠️⚔️⚔️🗡️🗡️⚔️☠️☠️💣☠️ I N E S S E S 🗡️💣',
				//29 on left side, 3 on right side
				'🗡️☠️🔪💣🗡️☠️☠️🔪🗡️☠️💣☠️🗡️🗡️☠️🗡️🔪🗡️🗡️⚔️⚔️💣🗡️💣💣⚔️🗡️☠️🔪 T I N E S S E S 🗡️☠️⚔️',
				//27 on left side, 4 on right side
				'🗡️🔪🗡️🗡️⚔️🔪🔪💣🔪🗡️💣🗡️☠️☠️🗡️🔪☠️⚔️🗡️🔪🗡️⚔️🗡️☠️💣🔪⚔️ L T I N E S S E S 🔪💣⚔️⚔️',
				//25 on left side, 5 on right side
				'💣💣🔪🗡️☠️💣💣☠️🔪🗡️🗡️💣☠️☠️🗡️🔪💣⚔️☠️⚔️⚔️💣☠️💣🗡️ I L T I N E S S E S ⚔️🔪🔪🗡️💣',
				//23 on left side, 6 on right side
				'🗡️☠️☠️💣⚔️💣🔪🔪💣🔪🔪🔪⚔️⚔️🔪💣🗡️🗡️💣☠️⚔️⚔️💣 U I L T I N E S S E S 💣💣⚔️💣🗡️💣',
				//21 on left side, 7 on right side
				'☠️🔪🗡️💣💣🗡️🔪🔪⚔️🔪🔪🔪🔪☠️⚔️💣🗡️🗡️⚔️☠️🗡️ G U I L T I N E S S E S 🔪☠️💣🗡️💣⚔️☠️',
				//19 on left side, 8 on right side
				'🔪🔪💣☠️💣💣🔪🔪💣☠️🔪⚔️🗡️🔪☠️☠️⚔️💣💣 D G U I L T I N E S S E S 💣💣🗡️🔪☠️🔪💣☠️',
				//17 on left side, 9 on right side
				'☠️🗡️⚔️💣🔪☠️☠️🔪🔪🗡️⚔️☠️☠️💣⚔️☠️💣 O D G U I L T I N E S S E S 🔪⚔️☠️⚔️💣⚔️☠️💣💣',
				//15 on left side, 10 on right side
				'⚔️💣🔪🗡️🔪💣☠️☠️🗡️🗡️☠️💣⚔️🔪🗡️ O O D G U I L T I N E S S E S 💣💣💣🗡️☠️🗡️💣💣🔪💣',
				//13 on left side, 11 on right side
				'🗡️⚔️☠️⚔️🔪💣🗡️🔪🗡️💣💣☠️☠️ L O O D G U I L T I N E S S E S ☠️💣☠️☠️💣🗡️🗡️☠️☠️🗡️💣',
				//11 on left side, 12 on right side
				'💣💣⚔️☠️💣☠️💣🔪🗡️⚔️🗡️ B L O O D G U I L T I N E S S E S ☠️⚔️🔪🔪🗡️🗡️💣🔪🔪🔪☠️☠️',
			//END BLOODGUILTINESSES
			//CRASHWORTHINESSES
				//12 on left side, 11 on right side
				'🚘🚗🚐🚚🚐🚗🚛🚛🚛🚐🚘🚗 C R A S H W O R T H I N E S S E S 🚚🚘🚐🚚🚗🚛🚗🚘🚛🚘🚚',
				//13 on left side; 11 on right side
				'🚚🚘🚛🚛🚗🚐🚐🚐🚐🚐🚗🚚🚛 R A S H W O R T H I N E S S E S 🚐🚚🚗🚛🚗🚗🚚🚛🚚🚐🚘',
				//15 on left side; 10 on right side
				'🚚🚐🚗🚛🚚🚗🚗🚐🚘🚛🚗🚗🚗🚗🚛 A S H W O R T H I N E S S E S 🚐🚚🚗🚐🚗🚛🚗🚚🚚🚘',
				//17 on left side; 9 on right side
				'🚗🚚🚗🚛🚚🚗🚛🚗🚚🚗🚛🚚🚐🚛🚐🚗🚛 S H W O R T H I N E S S E S 🚐🚘🚘🚘🚛🚛🚚🚘🚛',
				//19 on left side; 8 on right side
				'🚘🚗🚚🚛🚐🚘🚛🚘🚛🚐🚘🚚🚐🚚🚛🚐🚛🚚🚚 H W O R T H I N E S S E S 🚗🚗🚗🚐🚗🚗🚗🚘',
				//21 on left side; 7 on right side
				'🚗🚛🚘🚐🚘🚚🚘🚐🚐🚐🚐🚗🚗🚗🚐🚗🚐🚛🚗🚛🚗 W O R T H I N E S S E S 🚐🚐🚛🚐🚘🚛🚗',
				//23 on left side, 6 on right side
				'🚗🚘🚐🚗🚘🚘🚛🚚🚚🚛🚐🚗🚗🚚🚘🚗🚗🚐🚗🚘🚚🚛🚚 O R T H I N E S S E S 🚛🚘🚗🚗🚐🚛',
				//25 on left side, 5 on right side
				'🚛🚘🚐🚗🚚🚐🚐🚚🚘🚛🚘🚘🚘🚛🚘🚘🚛🚘🚗🚘🚘🚐🚗🚚🚚 R T H I N E S S E S 🚛🚗🚛🚚🚐',
				//27 on left side, 4 on right side
				'🚚🚚🚗🚗🚗🚐🚗🚐🚛🚐🚚🚘🚗🚛🚘🚚🚛🚐🚐🚚🚘🚐🚐🚐🚛🚘🚐 T H I N E S S E S 🚛🚘🚐🚗',
				//29 on left side, 3 on right side
				'🚘🚛🚐🚘🚐🚐🚗🚘🚛🚛🚛🚘🚐🚛🚛🚘🚘🚐🚛🚗🚗🚛🚘🚘🚚🚐🚗🚛🚚 H I N E S S E S 🚗🚗🚛',
				//31 on left side, 2 on right side
				'🚘🚚🚚🚐🚐🚘🚘🚐🚛🚗🚘🚘🚗🚐🚘🚘🚘🚚🚘🚐🚘🚗🚛🚘🚛🚗🚐🚘🚘🚐🚐 I N E S S E S 🚛🚘',
				//33 on left side, 1 on right side
				'🚛🚐🚘🚐🚘🚐🚛🚛🚐🚐🚘🚐🚐🚘🚘🚛🚐🚐🚛🚐🚚🚚🚘🚐🚐🚚🚘🚐🚚🚚🚚🚗🚗 N E S S E S 🚐',
				//34 on left side, 1 on right side
				'🚛🚘🚗🚐🚘🚐🚛🚘🚛🚚🚐🚛🚐🚘🚛🚐🚛🚛🚐🚘🚘🚚🚐🚐🚚🚗🚚🚚🚘🚘🚐🚘🚛🚐 E S S E S 🚐',
				//35 on left side, 1 on right side
				'🚚🚐🚗🚛🚘🚗🚗🚐🚛🚐🚛🚐🚐🚗🚚🚗🚐🚚🚚🚛🚚🚚🚐🚚🚚🚐🚛🚛🚐🚘🚗🚚🚛🚘🚛 S S E S 🚘',
				//36 on left side, 1 on right side
				'🚐🚐🚛🚐🚗🚛🚘🚗🚐🚘🚗🚗🚛🚛🚐🚚🚗🚛🚗🚛🚚🚗🚚🚚🚘🚛🚗🚘🚐🚚🚗🚘🚛🚘🚗🚚 S E S 🚘',
				//37 on left side, 1 on right side
				'🚚🚗🚛🚘🚐🚘🚐🚗🚗🚚🚐🚘🚘🚐🚐🚛🚐🚚🚘🚛🚚🚐🚗🚚🚐🚗🚗🚛🚐🚚🚚🚗🚘🚗🚗🚗🚚 E S 🚚',
				//38 on left side, 1 on right side
				'🚚🚗🚛🚘🚐🚚🚛🚘🚗🚗🚘🚛🚛🚛🚘🚐🚐🚚🚐🚘🚗🚐🚘🚚🚘🚚🚗🚚🚗🚘🚗🚐🚐🚐🚗🚘🚚🚘 S 🚗',
			//END CRASHWORTHINESSES
			//DEMYTHOLOGIZATION
				//38 on left side, 1 on right side
				'👽👻💀😈👻😈😈👽🦄👻🦄🦄🦄💀👻👻💀👻😈👻👽😈👻👻😈🦄😈👽👽👽🦄👽🦄👽😈🦄🦄👽 N 😈',
				//37 on left side, 1 on right side
				'😈💀💀😈👻👽👻👽💀😈👽👽😈💀👽💀👽🦄🦄😈😈👽👽💀👽👽💀👽💀👻😈👻🦄😈😈🦄👽 O N 🦄',
				//36 on left side, 1 on right side
				'💀🦄👻😈👻💀🦄💀😈👻😈🦄👽👽😈👻👽👻🦄💀👽💀💀👽😈👽😈👻🦄👽👽🦄👻🦄🦄👽 I O N 🦄',
				//35 on left side, 1 on right side
				'👽😈👽🦄💀💀👻👻👻👻😈💀👻💀👻😈💀😈👽💀👽🦄🦄👻😈💀👻😈👻👻👻😈🦄🦄💀 T I O N 🦄',
				//34 on left side, 1 on right side
				'💀👻🦄💀💀💀👻💀👻👻👽👻👻🦄🦄💀💀💀💀👽👽👻👽🦄🦄👽👻👻👽💀😈🦄👽💀 A T I O N 💀',
				//33 on left side, 1 on right side
				'😈💀💀💀💀🦄💀😈🦄🦄👽👻👻💀🦄😈👻👻👽💀💀👻🦄💀😈💀🦄😈👻🦄🦄👽👽 Z A T I O N 🦄',
				//31 on left side, 2 on right side
				'👻👻💀🦄👽👽💀👻👻👻👻🦄😈😈🦄👻🦄😈💀😈😈👻👽😈👻😈😈👻👽👻👽 I Z A T I O N 👻🦄',
				//29 on left side, 3 on right side
				'💀🦄👽💀💀😈👻😈👻👻👻👻🦄👻🦄👻💀🦄👽😈😈😈🦄😈🦄😈👽👽👻 G I Z A T I O N 🦄😈💀',
				//27 on left side, 4 on right side
				'💀🦄👽👻👻💀👻👽🦄😈👻💀😈👽😈👻😈💀😈😈👽👻👽🦄👻😈🦄 O G I Z A T I O N 👽💀👽👽',
				//25 on left side, 5 on right side
				'👽💀😈👻👽👽🦄😈💀😈👽💀😈🦄👽😈👽🦄😈👽👻🦄💀💀👽 L O G I Z A T I O N 😈😈👽😈👻',
				//23 on left side, 6 on right side
				'👻👽👻👻👻🦄🦄🦄😈🦄💀👽👻😈💀👽💀💀👻🦄👻👻👻 O L O G I Z A T I O N 💀👻👻😈💀👻',
				//21 on left side, 7 on right side
				'👽😈👻👽😈🦄👻👽🦄💀💀😈😈😈😈💀👻💀😈😈👽 H O L O G I Z A T I O N 👻👽👻👽💀💀🦄',
				//19 on left side, 8 on right side
				'👽💀👻😈👻🦄👻👻👽😈👻👻😈💀👽👽🦄👻👽 T H O L O G I Z A T I O N 👽😈👽😈😈👽👽💀',
				//17 on left side, 9 on right side
				'😈🦄🦄🦄👻👻👽👽👻👽🦄😈🦄👽👽💀💀 Y T H O L O G I Z A T I O N 👽💀👽👻💀👽👻👻🦄',
				//15 on left side, 10 on right side
				'👻😈👻💀👽👻👻💀👻😈👻👽🦄👽😈 M Y T H O L O G I Z A T I O N 👽👻👻👽👽😈💀👻💀💀',
				//13 on left side, 11 on right side
				'👽🦄🦄🦄👽🦄🦄🦄👽🦄👻👻🦄 E M Y T H O L O G I Z A T I O N 💀💀🦄😈👽🦄👽😈👽👻😈',
				//11 on left side, 12 on right side
				'👽👽👻👻💀🦄💀👻🦄👻💀 D E M Y T H O L O G I Z A T I O N 👻💀👽💀👽😈👻🦄🦄💀😈😈',
			//END DEMYTHOLOGIZATION
			//EVERLASTINGNESSES
				//12 on left side, 11 on right side
				'⏰⏳⏰⏱️⏳⏳🕰️⏰⌚⏳⏳⌚ E V E R L A S T I N G N E S S E S ⏳⌚⏰⏰⏳🕰️⌚⏱️⏰⏳⌚',
				//13 on left side; 11 on right side
				'⌚⏰⏳⏱️🕰️⏰⏰⏱️🕰️⏱️⏰⏱️⏳ V E R L A S T I N G N E S S E S ⏱️⏰🕰️⏱️🕰️⌚🕰️🕰️⏱️🕰️⏳',
				//15 on left side; 10 on right side
				'⏳⌚🕰️⏰⏱️⏰⌚⏱️⏳⌚⌚⏰🕰️⏰⏰ E R L A S T I N G N E S S E S ⏰🕰️⌚⏱️🕰️⌚⏰⏰🕰️⏳',
				//17 on left side; 9 on right side
				'⏰⌚⌚⏰⏰⏱️⏳⌚⏰⏰⌚⏳⏱️⌚⌚⏰⏱️ R L A S T I N G N E S S E S ⏱️⏳⏰🕰️⏰⌚⏱️⏰⏰',
				//19 on left side; 8 on right side
				'⌚⏰⏳🕰️⌚⏰⏱️⏱️⏳⌚⏳⌚🕰️⏰⌚⏱️🕰️⏳⏰ L A S T I N G N E S S E S ⏱️⏱️⌚⏱️⏱️⏰⏳⏳',
				//21 on left side; 7 on right side
				'⌚🕰️🕰️⏰🕰️⏳⏱️⏱️⏳⏳⏱️⏱️⌚⏰⏱️⌚⏰⏰🕰️⌚⌚ A S T I N G N E S S E S ⏱️⏱️🕰️⏰⏰⏳🕰️',
				//23 on left side, 6 on right side
				'⏰⏰🕰️⏰⏰🕰️⌚⏳⏱️⌚⏱️⏱️⏰🕰️⌚⏱️⌚⏰⏰⏰⏰⌚⏱️ S T I N G N E S S E S ⌚⏱️🕰️⏱️⏰🕰️',
				//25 on left side, 5 on right side
				'⏳🕰️⌚⏳⌚⏱️⌚⌚⌚⏳🕰️🕰️⌚⏳⏱️🕰️⏰⌚🕰️⏳⏰⏰⏳🕰️🕰️ T I N G N E S S E S 🕰️⏱️⏳🕰️⌚',
				//27 on left side, 4 on right side
				'⏱️⏰⌚⏳⏰⏰🕰️⏰⏳⌚⏱️⏰⏱️⌚⏳⏳⏰⏰⏱️🕰️🕰️⌚⏳⏰⏰⌚⏳ I N G N E S S E S 🕰️⏱️🕰️⏳',
				//29 on left side, 3 on right side
				'⏳⌚⏳⏳⏱️⏰⏳⏰⏱️⏰⏱️⌚⏰⌚⏱️⏰🕰️⏳⏰⏰⏰⌚⏰⏳⌚⌚⏱️⏳⌚ N G N E S S E S 🕰️🕰️⌚',
				//31 on left side, 2 on right side
				'🕰️🕰️⏱️⏰🕰️⏱️⏳⏰⏰⏱️⏰⌚⏱️⏳⏰🕰️⏱️🕰️⏱️⌚⏰🕰️⏱️🕰️⏱️⌚⌚⏳⏰⏰⏰ G N E S S E S ⌚🕰️',
				//33 on left side, 1 on right side
				'⏱️🕰️⏳⏱️⏳⌚⏳⌚⏳⌚⏳⌚🕰️⏰⌚🕰️⏰🕰️🕰️🕰️🕰️⏳⏱️⌚⏳⏰⏳⏰⏳⏰⏳🕰️🕰️ N E S S E S ⏱️',
				//34 on left side, 1 on right side
				'⌚⏳⌚⏳⏰⏰🕰️⏰⏳⌚⏳⏰⏱️⏰⌚⏱️⏱️🕰️⏳⌚⌚⏱️⏳⏰⏰⏰⌚⏰⌚⏳⏱️⏱️🕰️⏱️ E S S E S ⏱️',
				//35 on left side, 1 on right side
				'⏱️⏳⏳⏱️🕰️⌚⏰⌚⏳🕰️⏰🕰️⏰🕰️⌚⏱️🕰️⏱️🕰️⏱️⌚⏱️⏰🕰️⌚⏰⏰⌚🕰️⏱️⏱️⌚⏰🕰️⏳ S S E S ⏱️',
				//36 on left side, 1 on right side
				'⏱️⌚🕰️⏱️🕰️🕰️⏳🕰️⌚⏰⏱️⏳⏱️⏱️🕰️⏱️⏰⏰⏳🕰️⏳⏰⏰🕰️🕰️🕰️⏰🕰️⏳⏱️⏰⏳⏰⏱️⏳⏱️ S E S ⌚',
				//37 on left side, 1 on right side
				'⏱️⏳⏳⏳⌚⌚⏳⌚🕰️⏳🕰️⏳⏱️🕰️⏳⏱️⌚🕰️🕰️⏰⏰🕰️⏰⏳⌚⌚⌚⏱️⏰🕰️⏳🕰️⏱️🕰️🕰️⏱️🕰️ E S 🕰️',
				//38 on left side, 1 on right side
				'⏰🕰️⏰⌚⏳⏳🕰️⌚⏱️🕰️⏰⏰⏳⌚⏳⏳⌚🕰️🕰️⏱️⏰⏰⏱️⏰🕰️⏱️⏱️⏳⌚🕰️⏳⌚⌚⏳🕰️⏱️⏰🕰️ S 🕰️',
			//END EVERLASTINGNESSES
			//FLORIFEROUSNESSES
				//38 on left side, 1 on right side
				'🌺🌺🌻💐🌻🌺🌻🌸💐🌹🌺🌻🌻🌹🌻🌺🌺🌺🌸🌺🌸🌺🌸🌸🌸💐💐🌻🌸🌻🌺🌻🌹🌸🌹💐🌺🌺 S 🌻',
				//37 on left side, 1 on right side
				'🌻🌻🌺🌸🌺💐💐🌻🌻🌺💐🌺🌻🌹🌸🌻🌻🌺🌹🌺🌻🌺🌻🌻🌻🌹🌻🌺🌻🌺💐🌹🌸🌻💐🌻🌸 E S 💐',
				//36 on left side, 1 on right side
				'🌻🌸🌹💐💐🌸🌺🌸💐💐🌸💐🌻💐🌺🌻🌻🌺🌸🌸🌺🌸💐🌹🌻💐💐🌹🌻🌸💐💐🌸🌻🌸🌺 S E S 🌹',
				//35 on left side, 1 on right side
				'🌸🌹💐🌺🌻🌻💐💐🌹💐🌻🌹🌹🌻🌹🌺💐🌸🌸🌸🌸🌺🌸🌻🌺🌹🌺💐🌻🌹🌺🌸🌺🌻🌻 S S E S 💐',
				//34 on left side, 1 on right side
				'💐🌻🌻🌺🌻🌺🌻🌹🌸🌸🌺🌸🌻🌺🌺🌻🌸🌹🌺🌺🌸🌻🌹🌻💐🌹🌸🌸🌹🌺🌺🌻💐💐 E S S E S 🌻',
				//33 on left side, 1 on right side
				'🌺🌻💐🌻🌺🌹🌸🌸💐🌹🌻🌸🌻🌺🌹🌺🌻💐💐🌻🌺🌻🌹🌺💐🌸🌻🌺🌸💐🌸🌸💐 N E S S E S 🌺',
				//31 on left side, 2 on right side
				'🌹💐🌹🌺🌺💐🌸🌸🌸🌺💐🌹🌺🌺🌻🌻🌺🌻🌹💐🌹🌺🌸💐🌸🌻🌻🌹🌻🌺🌺 S N E S S E S 🌻🌺',
				//29 on left side, 3 on right side
				'🌺🌹🌹🌸🌸🌹🌸🌹🌸🌻🌹🌻🌻💐🌸🌻💐🌺🌹🌸🌹💐🌸🌸🌹🌹🌻🌺🌻 U S N E S S E S 💐🌺🌻',
				//27 on left side, 4 on right side
				'🌹🌹💐💐🌸💐🌹🌺🌹🌺🌸🌸💐🌸🌺🌸🌺🌺🌻💐💐🌻🌻🌹🌸🌹🌸 O U S N E S S E S 🌻🌹🌻🌺',
				//25 on left side, 5 on right side
				'🌸🌻💐🌺💐🌸🌸💐🌸🌺🌹🌻💐💐💐🌺💐🌸🌺🌸🌺🌺🌻🌸🌻 R O U S N E S S E S 🌹🌺🌹💐🌺',
				//23 on left side, 6 on right side
				'🌸🌹💐🌸🌺💐💐🌻🌹💐🌻🌹🌻🌹🌹🌻💐🌺🌺💐🌻🌻💐 E R O U S N E S S E S 🌹🌺🌹🌹🌸💐',
				//21 on left side, 7 on right side
				'🌸🌺🌺💐🌹💐🌻🌺🌸🌺💐🌸🌻💐💐🌹💐🌻🌻🌹🌺 F E R O U S N E S S E S 🌹💐🌹💐🌹🌹💐',
				//19 on left side, 8 on right side
				'💐🌹🌸💐🌸🌻🌻🌻🌸🌻🌺💐💐🌹🌻🌸💐🌻🌺 I F E R O U S N E S S E S 💐🌻🌺🌺🌹🌸🌸🌹',
				//17 on left side, 9 on right side
				'🌺🌺🌻🌸💐🌺🌺🌻💐💐🌹🌻🌺🌻🌹🌸🌺 R I F E R O U S N E S S E S 🌺🌸🌻🌻🌺🌻🌻🌸🌺',
				//15 on left side, 10 on right side
				'💐🌺🌸🌸🌻🌸🌺🌸🌹🌺🌺💐🌹🌸💐 O R I F E R O U S N E S S E S 🌻🌹🌺🌸🌻💐🌻🌹💐💐',
				//13 on left side, 11 on right side
				'🌺🌹🌻🌻🌹💐🌸💐💐🌸🌺🌸🌸 L O R I F E R O U S N E S S E S 🌸🌸🌹💐🌺💐💐🌺🌺🌻🌸',
				//11 on left side, 12 on right side
				'🌹🌻🌺🌹🌺🌻🌸🌸🌻💐🌻 F L O R I F E R O U S N E S S E S 🌺🌸🌸💐💐🌻🌺💐🌹🌺🌸🌻'
			//END FLORIFEROUSNESSES
			//END 17 LETTERS
			];//end array

var arrayLength = array.length;


	for (var i = 0; i < arrayLength; i++) {
		setTimeout(function () {
			console.log(array[counter]);
			counter ++;
		}, timer);
		timer +=100;
	}



