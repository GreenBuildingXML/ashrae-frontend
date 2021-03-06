# Test Case 13 – Missed Balcony
## Test Description:
A balcony is a platform that is part of an upper floor with a balustrade only at the front. Besides being an extra open space of the building, balconies provide shade to the lower floors. Therefore, it is important to capture this type of structure correctly in the gbXML model.
## Spaces / Rooms:
There are two spaces in this test model. One space is located on the first floor, named “level_1_space_1”. The other one is located on the second floor, named “level_2_space_1”.
## Special Considerations:
1.	The model is 10’ x 10’ x 21’ (including floor and roof thickness using center line).
2.	The model has two stories and each story is one space.
3.	Wall thickness is 8”.
4.	The balcony platform is 16’8” x 16’ 8” and surrounds the floor on the second story. The thickness of the platform is 1’.

### Space Volumes and Areas
| Name            | Volume    | Area  |
|-----------------|-----------|-------|
| level_1_space_1 | 784.00 CF | 87 SF |
| level_2_space_1 | 784.00 CF | 87 SF |



## Description of Test Case:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model. Walls are located between the slab floor and the roof.
### Figure 2. Floor and Ceiling Plan View
Shows a typical floor plan to indicate dimensions and directions of the space with wall thickness, which are important for the gbXML space and surface definitions.  

### Figure 3. Section View
Shows an elevation view to indicate positions and dimensions of the slab floor, roof, ceiling and balcony.

### Figure 4. Balcony is drawn using floor element but it is separately from the floor on the 2nd story.
It should be noted that in this test case, the balcony was drawn separately from the floor located on the second story.
