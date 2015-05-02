exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['toDoListFeature.js'
         ,'markCompletedFeature.js'
         ,'filterTasksFeature.js'
         ,'countTasksFeature.js']
}