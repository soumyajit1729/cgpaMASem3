            var y3,y2,y1,x1,x2,x3,x4,cg;
            x1=x2=x3=x4=y1=y2=y3=cg=0;
            $(".m").click(function(){
    			$("#m").text($(this).text());	                       
 			 });
			$(".c").click(function(){
    			$("#c").text($(this).text());                        
 			 });
			$(".eng").click(function(){
    			$("#eng").text($(this).text());                        
 			 });
			$(".ml").click(function(){
    			$("#ml").text($(this).text());                        
 			 });
			$(".el").click(function(){
    			$("#el").text($(this).text());                        
 			 });
			$(".e").click(function(){
    			$("#e").text($(this).text());                        
 			 });
			$(".cl").click(function(){
    			$("#cl").text($(this).text());                        
 			 });
			$("#cex").click(function(){
    			x2=10;	                       
 			 });
 			 $("#ca").click(function(){
    			x2=9;	                       
 			 });
 			 $("#cb").click(function(){
    			x2=8;	                       
 			 });
 			 $("#cc").click(function(){
    			x2=7;	                       
 			 });
 			  $("#cd").click(function(){
    			x2=6;	                       
 			 });
              $("#mex").click(function(){
                x1=10;                        
             });
             $("#ma").click(function(){
                x1=9;                          
             });
             $("#mb").click(function(){
                x1=8;                          
             });
             $("#mc").click(function(){
                x1=7;                          
             });
              $("#md").click(function(){
                x1=6;                          
             });
              $("#eex").click(function(){
                x3=10;                         
             });
             $("#ea").click(function(){
                x3=9;                          
             });
             $("#eb").click(function(){
                x3=8;                          
             });
             $("#ec").click(function(){
                x3=7;                          
             });
              $("#ed").click(function(){
                x3=6;                          
             });
               $("#engex").click(function(){
                x4=10;                         
             });
             $("#enga").click(function(){
                x4=9;                          
             });
             $("#engb").click(function(){
                x4=8;                          
             });
             $("#engc").click(function(){
                x4=7;                          
             });
              $("#engd").click(function(){
                x4=6;                          
             });
               $("#mlex").click(function(){
                y1=10;                         
             });
             $("#mla").click(function(){
                y1=9;                          
             });
             $("#mlb").click(function(){
                y1=8;                          
             });
             $("#mlc").click(function(){
                y1=7;                          
             });
              $("#mld").click(function(){
                y1=6;                          
             });
               $("#clex").click(function(){
                y2=10;                         
             });
             $("#cla").click(function(){
                y2=9;                          
             });
             $("#clb").click(function(){
                y2=8;                          
             });
             $("#clc").click(function(){
                y2=7;                          
             });
              $("#cld").click(function(){
                y2=6;                          
             });  
                $("#elex").click(function(){
                y3=10;                         
             });
             $("#ela").click(function(){
                y3=9;                          
             });
             $("#elb").click(function(){
                y3=8;                          
             });
             $("#elc").click(function(){
                y3=7;                          
             });
             $("#eld").click(function(){
                y3=6;                          
             }); 
             
             $("#sub").click(function(){ 
                cg=(3*(x1+x2+x4+y1)+4*x3+2*(y2+y3))/20;              
                $("#abc").text("your cgpa is: "+cg);
                $("#abc").css("background-color", "rgba(255,255,255,0.9");
                $("#abc").css("border", "1px solid black");
             });


              