// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
$(document).on('click', '#create_button', function(){
    $('div.ideas').fadeOut('fast', function() {
        $('div.create_idea').fadeIn('fast');
    })
})
$(document).on('click', '#cancel', function(){
    $('div.create_idea').fadeOut('fast', function() {
        $('div.ideas').fadeIn('fast');
    })
})
$(document).ready(function() {
     // BUTTON TO CREATE IDEAS
    //  $('#create_button').click(function (){
    //      $('div.ideas').fadeOut('fast', function() {
    //          $('div.create_idea').fadeIn('fast', function() {
    //          })
    //      })
    //  });
    //  POST IDEAS
     $('.idea_create').submit(function(){
         $('.create_idea').fadeOut('slow', function() {
             $('.ideas').fadeIn('slow', function() {
             })
         })
     })
     $('#cancel').click(function(){
         $('div.create_idea').fadeOut('fast', function() {
             $('div.ideas').fadeIn('fast', function() {
             })
         })
     })
});
