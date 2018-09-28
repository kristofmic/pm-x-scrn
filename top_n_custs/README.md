# pm-x-scrn

## Top N Customers

Please refer to the index.js file in this directory for my solution, which goes through
the list of orders and builds a map of each customer and the total number of orders each
has placed (NOTE: I'm using the customer's name as the key given that the output requested only
include the name and count and not the customer ID, so this assumes each name is unique).

I then sort the map from largest to smallest and take the top 30 from the result to produce the
desired output.
