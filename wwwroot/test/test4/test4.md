# Test Case 4 – Multiple Ceiling Levels
## Test Description:
Multi-level drop ceilings are common in many buildings such as hotels and offices. This test models a multi-level drop ceiling in a space and examines whether the BIM authoring software has the capability of capturing the plenum space correctly in the exported gbXML model.
## Spaces / Rooms:
There are three spaces in this test model. One space is located below the ceiling, named “level_1_space_1”. One space is located in between the ceiling at height of 8' and the roof. This space is labeled as “level_1_plenum_1” and must be identified as a plenum. The third space is located in between the ceiling at height of 7' and the roof. It is named “level_1_plenum_2” and must be identified as a plenum.
## Special Considerations:
1.	The model is 10’ x 10’ (center line)
2.	The drop ceilings have multiple levels.
3.	For the purpose of simplicity, the plenum space created by two ceilings that are 10” high and 22" high, respectively. The ceiling is 2” thick. The dimensions of the ceilings are both 9'4" x 5'. There is a half wall in between the two ceilings that is 8" thick.
4.  Use a space separator to draw lines along the exterior walls' middle lines and half wall's middle line at the height of each ceiling. Trim the separator lines, only keep the half where the ceiling is.

### Space Volumes and Areas
| Name             | Volume    | Area  |
|------------------|-----------|-------|
| level_1_space_1  | 650.22 CF | 87 SF |
| level_1_plenum_1 | 88.56 CF  | 50 SF |
| level_1_plenum_2 | 41.67 CF  | 50 SF |


## Description of Test Case:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model.
### Figure 2. Floor View
Shows a typical floor plan to indicate dimensions and directions of the space with wall thickness.
### Figure 3. Section View
Shows a typical section view to indicate positions and dimensions of the ceilings.
