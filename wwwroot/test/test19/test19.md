# Test Case 19 – Space inside another space
## Test Description:
Space enclosing other space is common to find in many commercial buildings. Such layout challenges BIM software to correctly identify the inner room spaces whose bounding surfaces are internal (partition walls).
## Spaces / Rooms:
There are two spaces in this test model. It is named as “level_1_space_1” and “level_1_space_2”.
## Special Considerations:
1.	The model is 10’ height and 10’ wide.
2.	The inner room is 5’ x 5’ and located at the center of the outer room.
3.	The wall thickness is 8”
4.	The both thicknesses of roof and slab on grade are 1’.
5.	All the walls face to an orientation shall be named as: “[orientation]_wall_[custom index]”
6.	All the other surfaces shall be named as their function, such as “interior_wall_[custom index]”
7.	The custom index is an index to differentiate the same type surfaces. The tester can decide how to label the custom index.


## Description of Test Case:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model.
### Figure 2. Floor and Ceiling Plan View
Shows a typical floor plan to indicate dimensions and directions of the space, with wall thickness and the curve space dimensions.  
### Figure 3. Section View
Shows the elevation view to indicate positions and dimensions of the slab floor, roof or ceiling elements.
