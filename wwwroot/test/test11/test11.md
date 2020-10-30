# Test Case 11 – Dormer on the roof
## Test Description:
This case is developed to test a pitched roof, which has a dormer, can be recognized correctly in the exported gbXML model. If the roof is successfully exported with the correct surface type, then the test is passed, else, failed.
## Spaces / Rooms:
There is one space in this test model. It is named as “level_1_space_1”.
## Special Considerations:
1.	The model is 10’ x 10’ x 21’ (including floor and roof thickness, using center line)
2.	The model has two stories and three spaces.
3.	All the walls face to an orientation shall be named as: “[orientation]_wall_[custom index]”
4.	All the other surfaces shall be named as their function, such as “interior_wall_[custom index]
5.	The custom index is an index to differentiate the same type surfaces. The tester can decide how to label the custom index.



## Description of Test Case:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model.
### Figure 2. Floor and Ceiling Plan View
Shows a typical floor plan to indicate dimensions and directions of the space, with wall thickness, which are important for the gbXML space and surface definitions.

### Figure 3. Section View
Shows the elevation view to indicate positions and dimensions of the slab floor, roof or ceiling elements.