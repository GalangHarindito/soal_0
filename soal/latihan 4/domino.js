function domino(size) {
    
    var mid1
    var mid2

    if(size % 2 === 1){
        mid1 = Math.ceil(size/2-1)
        var midTop = Math.ceil(mid1/2)
        var midBottom = mid1 + midTop
    }else{
        mid1 = size/2-1
        mid2 = size/2
        midTop = Math.ceil(mid1/2)
        midBottom = mid2 + midTop
    }
    for(var i=0;i<size;i++){
        var result = ''
        for(var j=0;j<size;j++){
            if(i === 0 || i === size-1){
                result += '*'
            }
            else if(i === mid1 || i === mid2){
                result += '*'
            }
            else{
                if(j === 0 || j === size-1){
                    result += '*'
                }
                else if(i === midTop && j === mid1){
                    result += Math.ceil(Math.random() * 6)
                }else if(i === midBottom && j === mid1){
                    result += Math.ceil(Math.random() * 6)
                }
                else{
                    result += ' '
                }
            }
        }
       console.log(result) 
    //    result =''
    }
       
  }

  domino(5);
  /*
  NOTE: angka di dalam domino bisa berbeda
  #########
  #       #
  #   3   #
  #       #
  #########
  #       #
  #   5   #
  #       #
  #########
  */
  
  domino(12);
  /*
  NOTE: angka di dalam domino bisa berbeda
  ############
  #          #
  #    5     #
  #          #
  #          #
  ############
  ############
  #          #
  #    1     #
  #          #
  #          #
  ############
  */
  
  domino(10);
  /*
  NOTE: angka di dalam domino bisa berbeda
  ##########
  #        #
  #    6   #
  #        #
  ##########
  ##########
  #        #
  #    6   #
  #        #
  ##########
  */
  
  domino(21);
  /*
  NOTE: angka di dalam domino bisa berbeda
  #####################
  #                   #
  #                   #
  #                   #
  #                   #
  #         4         #
  #                   #
  #                   #
  #                   #
  #                   #
  #####################
  #                   #
  #                   #
  #                   #
  #                   #
  #         4         #
  #                   #
  #                   #
  #                   #
  #                   #
  #####################
  */