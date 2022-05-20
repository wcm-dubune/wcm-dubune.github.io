export default {
	left: {
		notice: '모든 식사류에는 <span class="bold">콩나물밥</span> 기본제공',
		groups: [
			{
				subTitle: '식사류',
				menus: [
					{
						name: '두부전골',
						price: '15,000원',
						thumb: '전골.jpg',
						desc: '2인분 이상 주문 가능',
						prefix: {
							text: 'Best',
							class: 'best'
						}
					},
					{
						name: '두부부대전골',
						price: '13,000원',
						desc: '2인분 이상 주문 가능'
					},
					{
						name: '얼큰순두부',
						price: '10,000원',
						// thumb: '수정_얼큰.jpg',
						desc: ''
					},
					{
						name: '즉석순두부',
						price: '9,000원',
						thumb: '순두부.jpg',
						desc: ''
					},
					{
						name: '홍어청국장',
						price: '11,000원',
						// thumb: '수정_청국장.jpg',
						desc: ''
					},
					{
						name: '청국장',
						price: '10,000원',
						// thumb: '수정_청국장.jpg',
						desc: ''
					},
					{
						name: '우렁강된장',
						price: '11,000원',
						// thumb: '1.jpg',
						desc: ''
					},
					{
						name: '곤드레밥',
						price: '10,000원',
						// thumb: '1.jpg',
						desc: ''
					}
				]
			}
		]
	},
	center: {
		groups: [
			{
				subTitle: '메인 메뉴',
				menus: [
					{
						name: '홍어삼합',
						price: '45,000원',
						thumb: '홍어삼합.jpg',
						desc: '홍어 + 고기 + 김치',
						prefix: {
							text: '추천',
							class: 'recommend'
						}
					},
					{
						name: '홍어',
						price: '17,000원',
						// thumb: '1.jpg',
						desc: ''
					},
					{
						name: '수육',
						price: '12,000원',
						// thumb: '1.jpg',
						desc: ''
					},
					{
						name: '모두부',
						price: '12,000원',
						// thumb: '1.jpg',
						desc: ''
					},
					{
						name: '메밀전병',
						price: '10,000원',
						// thumb: '1.jpg',
						desc: ''
					},
					{
						name: '감자전',
						price: '6,000원',
						// thumb: '1.jpg',
						desc: ''
					},
					{
						name: '도토리묵무침',
						// thumb: '1.jpg',
						price: '12,000원',
						desc: '',
						prefix: {
							text: '여름',
							class: 'summer'
						}
					},
					{
						name: '콩국수',
						// thumb: '1.jpg',
						price: '10,000원',
						desc: '',
						prefix: {
							text: '여름',
							class: 'summer'
						}
					}
				]
			}
		]
	},
	right: {
		groups: [
			{
				subTitle: '주류 및 추가메뉴',
				menus: [
					{
						name: '콩나물밥 추가',
						price: '3,000원',
						thumb: '콩나물밥.jpg',
						desc: ''
					},
					{
						name: '소주',
						price: '5,000원',
						// thumb: '1.jpg',
						desc: ''
					},
					{
						name: '맥주',
						price: '5,000원',
						// thumb: '1.jpg',
						desc: ''
					},
					{
						name: '막걸리',
						price: '4,000원',
						// thumb: '1.jpg',
						desc: ''
					},
					{
						name: '음료수',
						price: '2,000원',
						// thumb: '1.jpg',
						desc: ''
					}
				]
			},
			// {
			// 	subTitle: '계절메뉴',
			// 	menus: [
			// 		{
			// 			name: '콩국수',
			// 			price: '9,000원',
			// 			// thumb: '1.jpg',
			// 			desc: '',
			// 			prefix: {
			// 				text: '여름',
			// 				class: 'summer'
			// 			}
			// 		},
			// 		// {
			// 		// 	name: '도토리묵 무침',
			// 		// 	// thumb: '1.jpg',
			// 		// 	price: '10,000원',
			// 		// 	desc: '',
			// 		// 	prefix: {
			// 		// 		text: '여름',
			// 		// 		class: 'summer'
			// 		// 	}
			// 		// },
			// 		{
			// 			name: '생굴',
			// 			price: '10,000원',
			// 			// thumb: '1.jpg',
			// 			desc: '',
			// 			prefix: {
			// 				text: '겨울',
			// 				class: 'winter'
			// 			}
			// 		}
			// 	]
			// }
		]
	}
};
