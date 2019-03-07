"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Dajah Medina
   Date:   3.3.19
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
var reportHTML = "<h1>title</h1>";
for (i = 0;) {
    totalVotes = 0;
    race.foreach(calcSum);
    reportHTML = "<table><caption>race</caption><tr><th>Candidate<th/><th>Votes</th></tr></table>";
    candidateRows(i, totalVotes)
}

candidateRows(raceNum, totalVotes) {
    var rowHTML = "<tr><td>name" + canidateName + "(party)</td><td>votes" + canididateParty + "(percent)</td></tr>" + canidatePercent.toFixed(1) + candidateVotes.toLocalString();
    for (j) {
        canidateName = canidate[raceNum][j];
        canididateParty = canidate[raceNum][j];
        canidateVotes = canidate[raceNum][j];
        canidatePercent = calcPercent(candidateVotes, totalVotes);
    }
}

/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}