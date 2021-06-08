
define(['ojs/ojcore','knockout','jquery','utils/accUtils','utils/messageBroker',
        'ojs/ojarraydataprovider','models/lesson.model','ojs/ojlistview','ojs/ojlistitemlayout','ojs/ojactioncard'],
 function(oj,ko,$,accUtils,MsgBroker,ArrayDataProvider,lessonModel) {
    function LessonsViewModel() {
      self = this;
      self.allData = ko.observableArray([]);
      self.selectedLessons = ko.observableArray([]);
      self.lessonsDataProvider = new ArrayDataProvider(self.selectedLessons,
        {keyAttributes:'@rid'});

      lessonModel.getLessonsList((success,data)=>{
           if(success)
           {
             // console.log(data); 
              self.allData(data);
              self.selectedLessons(self.allData());
              self.selectedLessons.valueHasMutated();
            }
      });
      MsgBroker.subscribe('Nav-URL-Changed', data=>{
         console.log("Lesson Page filter by :" + data);
      });
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.connected = () => {
        accUtils.announce('Customers page loaded.', 'assertive');
        document.title = "Customers";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return LessonsViewModel;
  }
);
