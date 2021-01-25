# Test Case 1 –  Exterior Wall with Multiple Layers
## Test Description:
Oftentimes, BIM modelers create multiple wall elements to form an exterior wall. There are many reasons to use such a technique including creating a wall with an uneven surface, separating one layer of the exterior insulation finish from the primary structure, and for accommodating manufacturer quantity take-off. However, the exported gbXML model should capture the multiple layers of walls and combine them into one assembly for building performance analysis.
## Spaces/Rooms/Surface:
There is one space in this test model named as “level_1_space_1”.
## Special Considerations:
1.	The model is 10’ x 10’ x 10’ (middle line), and the total wall thickness is 8”
2.	There are two walls in this model, one is the primary wall that consists of an interior finish, the structure, and sheetrock. The other one is the external layer. In this test case, there are two external layers, one is exterior insulation finish system (EIFS), and the other is a rain screen system.

### Space Volumes and Areas
| Name            | Volume    | Area  |
|-----------------|-----------|-------|
| level_1_space_1 | 812.25 CF | 90 SF |

### Table 1. Primary wall assembly details

|     Function     |     Material   Name     |     Thickness   (inches)    |     R   (ft2-F-hr/Btu)    |     Conductivity     (BTU/h.ft.F)    |     Density   (lb/ft3)    |     Specific   Heat (Btu/lb-F)    |
|------------------|-------------------------|-----------------------------|---------------------------|--------------------------------------|---------------------------|-----------------------------------|
|     Air   Gap    |     Steel   Batten      |     1”                      |     0.85                  |     -                                |     -                     |     -                             |
|     WRB          |     Building   paper    |     -                       |     -                     |     -                                |     -                     |     -                             |
|     Substrate    |     Plywood             |     1/2"                    |     -                     |     0.07                             |     33.7                  |     0.29                          |
|     Structure    |     Fiber   glass       |     4”                      |     13                    |     -                                |     -                     |     -                             |
|     Finish       |     Gypsum   board      |     1/2"                    |     -                     |     0.09                             |     49.9                  |     0.26                          |

### Table 2. External layer - EIFS
|     Function                 |     Material   Name    |     Thickness   (inches)    |     R   (ft2-F-hr/Btu)    |     Conductivity     (BTU/h.ft.F)    |     Density   (lb/ft3)    |     Specific   Heat (Btu/lb-F)    |
|------------------------------|------------------------|-----------------------------|---------------------------|--------------------------------------|---------------------------|-----------------------------------|
|     External   Insulation    |     EIFS               |     2”                      |     10                    |     -                                |     -                     |     -                             |

### Table 3. External layer - rainscreen
|     Function                 |     Material   Name    |     Thickness   (inches)    |     R   (ft2-F-hr/Btu)    |     Conductivity     (BTU/h.ft.F)    |     Density   (lb/ft3)    |     Specific   Heat (Btu/lb-F)    |
|------------------------------|------------------------|-----------------------------|---------------------------|--------------------------------------|---------------------------|-----------------------------------|
|     External   Insulation    |     Fiber   cement     |     2”                      |     0.0                   |     -                                |     -                     |     -                             |

It should be noted that the EIFS has 2” of extruded polystyrene (XPS), of which, its R-value is around R-10. On the other hand, the rainscreen system uses fiber cement board as the exterior façade. A typical rainscreen system has an air cavity that is open on the top and bottom parts of the façade to allow for constant circulation of air. Therefore, it is assumed to have 0 thermal resistance in this test case.

## Guideline for creating the BIM model:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model.
### Figure 2. Floor and Ceiling Plan View
Shows a typical floor plan to indicate dimensions and directions of the space with wall thickness. The dashed line represents the profile of the shading of the roof.
### Figure 3. Section View
Shows a typical section view to indicate positions and dimensions of the slab floor, the height of the roof and the ceiling element.
