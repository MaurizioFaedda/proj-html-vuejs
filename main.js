var app = new Vue ({
    el: '#root',
    data: {
        nav_menu:{
            // lascio la possibilità di inserire dei link per un dropdpwn
            "home": [],
            "services":[],
            "why us":[],
            "case studios":[],
            "about": [],
            "blog":[]
        },
        logos: [
            'facebook-f',
            'twitter',
            'instagram',
            'youtube',
            'linkedin-in',
            'tiktok'

        ],

        footer_menu:{
            service: [
                'Marketing Plan',
                'Sales Development',
                'Digital Marketing',
                'Piercing',
                'Why Us',
                'Case Studies'

            ],
            resources:[
                'Learning Center',
                'Video Tutorials',
                'Customers',
                'Blog'
            ],
            company: [
                'Who We Are',
                'Contact Us',
                'Careers'
            ]
        },
        number_phone: '(555) 802-1234',
        email_expert: 'info@yourcompany.com',
        check: false
    },

    methods: {
        isActive(){
            if(this.check === true){
                this.check = false
            }else{
                this.check = true
            }
        }
    }
})
