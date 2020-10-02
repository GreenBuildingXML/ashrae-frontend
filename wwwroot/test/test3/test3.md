# Test Case 3 – Half wall
## Test Description:
It is common to have a half wall in a space. The half wall are usually smaller walls what serves as a partition, but not completely disconnect two spaces. Technically a half wall can be any height short of the ceiling but they are typically about 3’ to 5’ tall, depending on the wall’s purpose and location. The test case provides a standard interpretation of such structure in the gbXML and a guideline to verify whether the BIM software can correctly export a space with a half wall.
## Spaces / Rooms:
There is just one spaces in this test model. It is located at the first floor, named as “level_1_space_1”.
## Special Considerations:
1.	The model is 10’8” x 10’8” (outer line)
2.	A 5’ half wall is located in the center of the space with a thickness of 8”.
3.	All the walls face to an orientation shall be named as: “[orientation]_wall_[custom index]”
4.	All the other surfaces shall be named as their function, such as “interior_wall_[custom index]
5.	The custom index is an index to differentiate the same type surfaces. The tester can decide how to label the custom index.



## Description of Test Case:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model. Walls locates between the slab floor and the roof.
### Figure 2. Floor View
Shows a typical floor plan to indicate dimensions and directions of the space, with wall thickness.
### Figure 3. Section View
Shows a typical section view to indicate positions and dimensions of the interior wall, the height of the roof.

The test case exported in gbXML model has a dimension of 10’ x 10’ x 10’.
The test case expects the half wall is translated into a shade inside the house.
