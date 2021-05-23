define(['ojs/ojModel'], 
    function() {
        class CourseModel{
            constructor(){

            }//

            initializeModelCollection(endpoint){
                this.courseModelDef = oj.Model.extend({
                    url : endpoint,
                    idAttribute :"@rid"
                });
                this.courseCollDef = oj.Model.extend({
                    url : endpoint,
                    comparator :"@rid",
                    model : new this.courseModelDef
                });
                this.courses = new this.courseCollDef;
            }//
            getCoursesMenu(notify){
                let navData = [
                    { path: '', redirect: 'dashboard' },
                    { path: 'dashboard', detail: { label: 'Dashboard', iconClass: 'oj-ux-ico-bar-chart' } },
                    { path: 'incidents', detail: { label: 'Incidents', iconClass: 'oj-ux-ico-fire' } }
                ];
                notify(navData);

            }//

            getCoursesList(notify){

            }//

            addCourse(id,title,description,notify){

            }//

            updateCourse(id,title,description,notify){

            }//

            deleteCourse(id,notify){

            }//


        }//end of class
    
    return new CourseModel
});//end define