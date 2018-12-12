function getDigitalClock(hour, minute)
{
       var r1 = "░", r2 = "█";	
       if(hour > 12)  hour = hour - 12;
       if(hour == 0)  hour = 12;
       hour = hour.toString();
       minute = minute.toString();
       var clock = [["111","101","101","101","111"],
       ["110","010","010","010","111"],["111","001","111","100","111"],
       ["111","001","111","001","111"],["1010","1010","1111","0010","0010"],
       ["111","100","111","001","111"],["111","100","111","101","111"],
       ["111","101","001","001","001"],["111","101","111","101","111"],
       ["111","101","111","001","001"],["1","1","0","1","1"]];
       for(var i = 0 ; i < 11 ; i++)
        for(var j = 0 ; j < 5 ; j++)
         clock[i][j] = clock[i][j].replace(/0/g, r1).replace(/1/g, r2);
       var result = "", enter = "\n";
       for(var i = 0 ; i < 5 ; i++)
       {
            if(i == 4) enter = "";          
            if(hour.length == 1) hour = "0" + hour;
            if(minute.length == 1) minute = "0" + minute;
            result += clock[hour[0]][i] + " " + clock[hour[1]][i] + " ";
            result += clock[10][i] + " " + clock[minute[0]][i] + " ";
            result += clock[minute[1]][i] + enter;    
       }
       return result;
}
