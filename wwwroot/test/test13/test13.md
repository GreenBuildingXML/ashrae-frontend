# Test Case 13 – Balcony
## Test Description:
Balcony is a platform that is part of an upper floor, with a balustrade only at the front. Besides an extra opening space to the building, balconies also provide shades to the lower floors. Therefore, it is important to capture this structure correctly in the gbXML model.
## Spaces / Rooms:
There are two spaces in this test model. One space is located at the first floor, named as “level_1_space_1”. The other one is located at the second floor, named as “level_2_space_1”.
## Special Considerations:
1.	The model is 10’ x 10’ x 21’ (including floor and roof thickness, using center line)
2.	The model has two stories and each story is one space.
3.	Wall thickness is 8”
4.	The balcony platform is 16’8” x 16’ 8” surround the floor on the second story. The thickness of the platform is 1’.
5.	All the walls face to an orientation shall be named as: “[orientation]_wall_[custom index]”
6.	All the other surfaces shall be named as their function, such as “interior_wall_[custom index]”
7.	The custom index is an index to differentiate the same type surfaces. The tester can decide how to label the custom index.




## Description of Test Case:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model. Walls locates between the slab floor and the roof.
### Figure 2. Floor and Ceiling Plan View
Shows a typical floor plan to indicate dimensions and directions of the space, with wall thickness, which are important for the gbXML space and surface definitions.  

### Figure 3. Section View
Shows an elevation view to indicate positions and dimensions of the slab floor, roof, ceiling and balcony.

### Figure 4. Balcony is drawn using floor element but it is separately from the floor on the 2nd story.
It should be noted that in this test case, the balcony was drawn separately from the floor on the second story.
