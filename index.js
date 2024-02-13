// the sticky navbar class
class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70;
		let self = this;
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
	onTabClick(event, element) {
		event.preventDefault();
		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
		});
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
	setSliderCss() {
		let width = 0;
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		$('.et-hero-tab-slider').css('width', width);
		$('.et-hero-tab-slider').css('left', left);
	}
	
}
new StickyNavigation();


$('document').ready(function(){

//Typing effect :
    function typingEffect(sentenceId, delay) {
        let sentence = $('#' + sentenceId);
        let sentenceText = sentence.text();
        sentence.text('');
      
        let i = 0;
        let typingInterval = setInterval(() => {
          sentence.text(sentence.text() + sentenceText[i]);
          i++;
          if (i >= sentenceText.length) {
            clearInterval(typingInterval);
            if (sentence.next('.writing').length) {
              setTimeout(() => {
                sentence.next('.writing').fadeIn(500);
                typingEffect(sentence.next('.writing').attr('id'), delay);
              }, delay);
            }
          }
        }, 100);
      }
      
      typingEffect('writing1', 800);
// End of typing effect :


// Projects slider part :
    $('.project2').hide();
	$('.project3').hide();
	$('.project4').hide();
	$('.project5').hide();


$('#slide-item-1').on('click',function(){
	$('.project1').show();
	$('.project2').hide();
	$('.project3').hide();
	$('.project4').hide();
	$('.project5').hide();

})

$('#slide-item-2').on('click',function(){
	$('.project2').show();
	$('.project1').hide();
	$('.project3').hide();
	$('.project4').hide();
	$('.project5').hide();

})

$('#slide-item-3').on('click',function(){
	$('.project3').show();
	$('.project2').hide();
	$('.project1').hide();
	$('.project4').hide();
	$('.project5').hide();
})

$('#slide-item-4').on('click',function(){
	$('.project4').show();
	$('.project2').hide();
	$('.project3').hide();
	$('.project1').hide();
	$('.project5').hide();

})

$('#slide-item-5').on('click',function(){
	$('.project5').show();
	$('.project4').hide();
	$('.project2').hide();
	$('.project3').hide();
	$('.project1').hide();
})
// End of projects part :


//Disactivating the studies cards links
$('.timeline-content').click(function(e) {
    e.preventDefault();
});

$('.nonLink').click(function(e) {
    e.preventDefault();
});


//the modal part
$(function () {
	$('.md-trigger').on('click', function() {
	  $('.md-modal').addClass('md-show');
	});
	
	$('.md-close').on('click', function() {
	  $('.md-modal').removeClass('md-show');
	});
  });
})



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}




//The projects of security slider
