define(['ojs/ojModel'], 
    function() {
        class LessonModel{
            constructor(){
                this.serverUrl= "http://localhost:2480/";
            }//

            initializeModelCollection(endpoint){
                this.lessonModelDef = oj.Model.extend({
                    url : endpoint,
                    idAttribute :"@rid"
                });
                this.lessonCollDef = oj.Model.extend({
                    url : endpoint,
                    comparator :"@rid",
                    model : new this.lessonModelDef
                });
                this.lessons = new this.lessonCollDef;
            }//
            getLessonsList(notify){
                let api_url = this.serverUrl+"query/ehabcourses/sql/SELECT FROM LESSON";
                this.initializeModelCollection(api_url);
                let lessonRow = new this.lessonModelDef({},this.lessons);
                lessonRow.fetch({
                    
                    headers:{
                        'Authorization' : 'Basic cm9vdDpyb290cHdk',
                        'Content-Type' : 'application/json'
                        
                        //if i want to manualy encrypted the authorization using basic 64 encryption
                        //'Authorization' : 'Basic'+btoa('root':'rootpwd')
                    },//headers
                    success:(coll,data)=>{
                        /*
                        let navData = [
                            { path: '', redirect: 'lessons' },
                            { path: 'lessons', detail: { label: 'Courses Lessons', iconClass: 'oj-ux-ico-bar-chart' } }
                        ];

                        //Reformating the Result
                        Object.entries(data).map((val)=>{
                            // In Result Array(Rows)
                            if(val[1].length != undefined){
                                val[1].forEach(row => {
                                    navData.push( { path: 'lessons/'+row.courseid,
                                    detail: { label: row.title, iconClass: 'oj-ux-ico-bar-chart' },
                                params:{id:row.courseid,title:row.title,description:row.description} })
                                });

                            }

                        });//
                        */
                        notify(true,data.result)
                        //console.log("Success");
                        //console.log(navData);
                    },//
                    error:(model,xhr,options)=>{
                        notify(false,'Error:'+xhr.textStatus);
                        //console.log("Error");
                        //console.log(options);
                    },//
                    
                });//end fetch

                /*
                let navData = [
                    { path: '', redirect: 'dashboard' },
                    { path: 'dashboard', detail: { label: 'Dashboard', iconClass: 'oj-ux-ico-bar-chart' } },
                    { path: 'incidents', detail: { label: 'Incidents', iconClass: 'oj-ux-ico-fire' } }
                ];
                notify(navData);
                */
            }//

            

        }//end of class
    
    return new LessonModel
});//end define