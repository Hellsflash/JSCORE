function occurences(text, word) {
   let counter = 0;
   let regex =new RegExp('\\b'+word.toLowerCase()+'\\b','g');
   text= text.toLowerCase();
   let match;

   while (match = regex.exec(text)){
       counter++;
   }

    console.log(counter);
}

occurences('The waterfall was so high, that the child couldn’t see its peak.','the');
occurences('How do you plan on achieving that? How? How can you even think of that?','how');
occurences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.','there');