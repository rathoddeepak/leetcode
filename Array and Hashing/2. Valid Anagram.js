/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Solution 1
var isAnagram = function(s, t) {
  if(s.length !== t.length){
      return false;
  }
  const mapS = {};
  const mapT = {};
  for(let i = 0; i < s.length; i++){
      if(mapS[s[i]])mapS[s[i]] += 1;
      else mapS[s[i]] = 1;
      
      if(mapT[t[i]])mapT[t[i]] += 1;
      else mapT[t[i]] = 1;
  }

  for(let x of s){
      if(mapS[x] !== mapT[x]){
          return false;
      }
  }
    
  return true;
};


// Solution 2
var isAnagram2 = function(s, t) {
  if(s.length !== t.length){
      return false;
  }
  const mapS = {};
  for(let i = 0; i < s.length; i++){
      if(mapS[s[i]])mapS[s[i]] += 1;
      else mapS[s[i]] = 1;
      
      if(mapS[t[i]])mapS[t[i]] -= 1;
      else mapS[t[i]] = -1;
  }

  for(let x of s){
      if(mapS[x] !== 0){
          return false;
      }
  }
    
  return true;
};
