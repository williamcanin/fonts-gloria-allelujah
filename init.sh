#!/bin/bash

echo
echo "You use Grunt or Gulp? (Answer with the number)"
PS3="Reply > "
select runner in "Grunt" "Gulp" "Cancel"; do
   case $runner in
      "Grunt")
        rm -f Gulpfile.js
        rm -f package.json
        cp ./dev/Grunt/* .
        echo "Done"
        break
        ;;
      "Gulp")
        rm -f Gruntfile.js
        rm -f package.json
        cp ./dev/Gulp/* .
        echo "Done"
        break
       ;;
      "Cancel")
        echo
        echo "You canceled the operation :( But remember, you must choose a CSS preprocessor."
        echo
        break
       ;;
       *)
         echo "Invalid Option"
       ;;
   esac
done