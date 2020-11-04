# Test Case 10 – Atrium Space
## Test Description:
Atrium is a space with high ceiling, usually has the height of two or more floors. When such a space is adjacent to regular spaces, the zone boundary algorithm could be confused, thus, produce erroneous gbXML model.
## Spaces / Rooms:
There are three spaces in this test model. The atrium space is named as “level_1_space_2”, The name of the first-floor space is “level_1_space_1” and name of the second-floor space is “level_2_space_1”.
## Special Considerations:
1.	The model is 10’ x 10’ x 21’ (including floor and roof thickness, using center line)
2.	The model has two stories and three spaces.
### Space Volumes and Areas
| Name            | Volume    | Area  |
|-----------------|-----------|-------|
| level_1_space_1 | 364.00 CF | 40 SF |
| level_1_space_2 | 768.44 CF | 40 SF |
| level_2_space_1 | 364.00 CF | 40 SF |


## Description of Test Case:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model.
### Figure 2. Floor and Ceiling Plan View
Shows a typical floor plan to indicate dimensions and directions of the space, with wall thickness, which are important for the gbXML space and surface definitions.  

### Figure 3. Section View
Shows the elevation view to indicate positions and dimensions of the slab floor, roof or ceiling elements.
