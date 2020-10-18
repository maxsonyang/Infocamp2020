'use strict';

sticky_sidebar();

bar_chart();
// radar_chart();


// function radar_chart() {
// 	var ctx = document.getElementById('radar_chart').getContext('2d');

// 	var myRadarChart = new Chart(ctx, {
// 	    type: 'radar',
// 	    data: {
// 		    labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
// 		    datasets: [{
// 		        data: [20, 10, 4, 2],
// 		        backgroundColor: 'rgba(255, 99, 132, 0.2)',
// 		        label: 'Data 1'
// 		    }, {
// 		    	data: [5, 28, 13, 30],
// 		    	backgroundColor:'rgba(54, 162, 235, 0.2)',
// 		    	label: 'Data 2'
// 		    }],
// 		},
// 	    options: {
// 		    scale: {
// 		        angleLines: {
// 		            display: false
// 		        },
// 		        ticks: {
// 		            suggestedMin: 5,
// 		            suggestedMax: 40
// 		        }
// 		    }
// 		}
// 	});
// }

// function bar_chart() {
// 	var ctx = document.getElementById('bar_chart').getContext('2d');
// 	var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });

// }


function sticky_sidebar () {
	// special thanks https://gist.github.com/javierarques/36d3cd821c5a36acd352c11f88bbf2f4

	var Sticky = (function() {
	  

	  var CSS_CLASS_ACTIVE = 'is-fixed';

	  var Sticky = {
	    element: null,
	    position: 0,
	    addEvents: function() {
	      window.addEventListener('scroll', this.onScroll.bind(this));
	    },
	    init: function(element) {
	      this.element = element;
	      this.addEvents();
	      this.position = element.offsetTop ;
	      this.onScroll();
	    },
	    aboveScroll: function() {
	      return this.position < window.scrollY;
	    },
	    onScroll: function(event) {
	      if (this.aboveScroll()) {
	        this.setFixed();
	      } else {
	        this.setStatic();
	      }
	    },
	    setFixed: function() {
	      this.element.classList.add(CSS_CLASS_ACTIVE);
	      // not needed if added with CSS Class
	      this.element.style.position = 'fixed';
	      this.element.style.top = 0;
	    },
	    setStatic: function() {
	      this.element.classList.remove(CSS_CLASS_ACTIVE);
	      // not needed if added with CSS Class
	      this.element.style.position = 'relative';
	      this.element.style.top = 'auto';
	    }
	  };

	  return Sticky;

	})();


	//  Init Sticky
	var sticky = document.querySelector('#sidebar');
	if (sticky)
	  Sticky.init(sticky);
}

