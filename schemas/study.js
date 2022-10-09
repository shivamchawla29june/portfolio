export default{
    name:'study',
    title:'Study',
    type: 'document',
    fields:[
        {name:'title',
        title:'Title',
        type:'string'
     },
     {
         name:'degree',
         title:'Degree',
         type:'string'
     },
     {
         name:'description',
         title:'Description',
         type:'string'
     },
     {
         name:'gpa',
         title:'GPA',
         type:'string'
     },
     {
         name:'year',
         title:'Year',
         type:'string'
     },
     {
        name:'specialization',
        title:'Specialization',
        type:'string'
    },
     {
        name:'imgUrl',
        title:'ImgUrl',
        type: 'image',
        options: {
          hotspot: true,
        },
    },
        
    ]
}