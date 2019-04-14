/**
 * Finder recursive for any key
 * @param {*} valueId The value of reference, preferably value of ID row.
 * @param {*} propertyFinded The property from which you will obtain value.
 * @param {*} value The object / array where the search will be made.
 */
function recursiveFinder( valueId, propertyFinded, value ) {
  let finded = "";
  if( Array.isArray( value ) ) {
    for( const row of value ) {
      finded = this.recursiveFinder( valueId, propertyFinded, row );
      if( finded !== "" ) {
        break;
      }
    }
  } esle {
    for( const key in value ) {
      if( value[ key ] == valueId ) {
        finded = value[ propertyFinded ];
        break;
      }
    }
  }
  return finded;
}
