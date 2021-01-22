# Test Case 09 – Window Located Within an Interior Wall
## Test Description:
It is common to find a concrete patio extended from a slab on grade foundation. In BIM model, the patio and slab on grade could be drawn in a same component. In such scenario, the exported gbXML model should correctly identify the slab on grade surface and patio surface from the
## Spaces / Rooms:
There are two spaces in this test model. Both of them are on the same level, separated by the interior wall. One space name is “level_1_space_1” and the other is “level_1_space_2”.
## Special Considerations:
1.	The model is 10’ x 10’ x 10’ (center line)
2.	The interior wall is located in the middle of the building, with a thickness of 8”.

### Space Volumes and Areas
| Name            | Volume    | Area  |
|-----------------|-----------|-------|
| level_1_space_1 | 378.00 CF | 42 SF |
| level_1_space_2 | 350.00 CF | 39 SF |

## Description of Test Case:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model.
### Figure 2. Floor and Ceiling Plan View
Shows the floor plan to indicate dimensions and directions of the space, with wall thickness, which are important for the gbXML space and surface definitions.  

### Figure 3. Section View
Shows the elevation view to indicate positions and dimensions of the interior window, slab floor and roof elements.
