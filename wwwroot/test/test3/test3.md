# Test Case 3 – Disconnected Roof and Interior Wall
## Test Description:
It is common to have a half wall in a space. Half walls are usually smaller walls that serve as partitions but do not completely divide two spaces. Technically a half wall can be any height short of the ceiling, but it is typically about 3’ to 5’ tall, depending on the wall’s purpose and location. This test case provides a standard interpretation of such structure in the gbXML and a guideline to verify whether the BIM software can correctly export a space with a half wall.
## Spaces / Rooms:
There is just one space in this test model. It is located on the first floor and is named “level_1_space_1”.
## Special Considerations:
1.	The model is 10’8” x 10’8” (outer line)
2.	A 5’ half wall is located in the center of the space with a thickness of 8”.

### Space Volumes and Areas

| Name            | Volume    | Area  |
|-----------------|-----------|-------|
| level_1_space_1 | 756.00 CF | 84 SF |


## Description of Test Case:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model. The wall is located between the slab floor and the roof.
### Figure 2. Floor View
Shows a typical floor plan to indicate dimensions and directions of the space with wall thickness.
### Figure 3. Section View
Shows a typical section view to indicate positions and dimensions of the interior wall and the height of the roof.

The test case exported to the gbXML model has a dimension of 10’ x 10’ x 10’.
The test case expects that the half wall is translated into a shade inside the house.
