# Test Case 6 – Construction Information of Multiple Layers
## Test Description:
Building envelopes contain critical information for performance analysis, including the assembly order, the thermal resistance of each layer, and the reflectance of the outermost layer. When exporting a BIM to gbXML, such information should be preserved and correctly mapped. This test case will examine the capability of a BIM authoring software tool in exporting the envelope information.
## Spaces / Rooms:
There is just one space in this test model. It is located on the first floor, named “level_1_space_1”.
## Special Considerations:
1.	The model is 10’ x 10’ (outer line).
2.	The thickness of the wall assembly is 1’1-1/8”. Tables 1, 2 and 3 below illustrate the layer-by-layer assemblies as well as the thermal properties for each layer.
3.	The exterior wall is a typical brick wall, and its structure is a 2x6 wood stud.
4.	The roof is a typical metal roof, and its structure is a 2x10 roof rafter.
5.	The floor is a slab-on-grade floor.

### Space Volumes and Areas
| Name            | Volume    | Area  |
|-----------------|-----------|-------|
| level_1_space_1 | 549.32 CF | 61 SF |

### Table 1. Wall assembly details
|     Function                 |     Material   Name       |     Thickness   (inches)    |     R   (ft2-F-hr/Btu)    |     Conductivity     (BTU/h.ft.F)    |     Density   (lb/ft3)    |     Specific   Heat (Btu/lb-F)    |
|------------------------------|---------------------------|-----------------------------|---------------------------|--------------------------------------|---------------------------|-----------------------------------|
|     Finish                   |     Brick                 |     4”                      |     -                     |     6.2                              |     120                   |     0.23                          |
|     Exterior   insulation    |     Rigid   insulation    |     2”                      |     -                     |     0.21                             |     2.7                   |     0.29                          |
|     WRB                      |     Building   paper      |     -                       |     -                     |     -                                |     -                     |     -                             |
|     Substrate                |     Plywood               |     1/2"                    |     -                     |     0.83                             |     33.7                  |     0.29                          |
|     Structure                |     Fiber   glass         |     6”                      |     -                     |     0.24                             |     8.7                   |     0.23                          |
|     Finish                   |     Gypsum   board        |     5/8"                    |     -                     |     1.1                              |     49.9                  |     0.26                          |
### Table 2. Roof assembly details
|     Function     |     Material   Name     |     Thickness   (inches)    |     R   (ft2-F-hr/Btu)    |     Conductivity     (BTU/h.ft.F)    |     Density   (lb/ft3)    |     Specific   Heat (Btu/lb-F)    |
|------------------|-------------------------|-----------------------------|---------------------------|--------------------------------------|---------------------------|-----------------------------------|
|     Finish       |     Metal   surface     |     0.03”                   |     -                     |     314                              |     488.4                 |     0.12                          |
|     WRB          |     Building   paper    |     -                       |     -                     |     -                                |     -                     |     -                             |
|     Substrate    |     Plywood             |     1/2"                    |     -                     |     0.83                             |     33.7                  |     0.29                          |
|     Structure    |     Fiber   glass       |     10”                     |     -                     |     0.24                             |     8.7                   |     0.23                          |
|     Finish       |     Gypsum   board      |     5/8"                    |     -                     |     1.1                              |     49.9                  |     0.26                          |
### Table 3. Floor assembly details
|     Function    |     Material   Name     |     Thickness   (inches)    |     R   (ft2-F-hr/Btu)    |     Conductivity     (BTU/h.ft.F)    |     Density   (lb/ft3)    |     Specific   Heat (Btu/lb-F)    |
|-----------------|-------------------------|-----------------------------|---------------------------|--------------------------------------|---------------------------|-----------------------------------|
|     Exterior    |     Slab   on Grade     |     4”                      |     -                     |     3.7                              |     80                    |     0.2                           |
|     Air         |     Air   gap           |     2”                      |     0.18                  |     -                                |     -                     |     -                             |
|     Finish      |     Hardwood   floor    |     7/9”                    |     0.12                  |     -                                |     -                     |     -                             |


## Description of Test Case:
### Figure 1. Isometric View
Shows a 3-dimensional isometric view of this test model. The wall is located between the slab floor and the roof and is made up of multiple layers.
### Figure 2. Floor and Ceiling Plan View
Shows the dimension of the model (excluding the roof and floor thickness).
The test expects that the constructions and its layers can successfully be exported to gbXML.
The test expects that the layers with thickness can be exported successfully with the correct name and thermal properties.

### Figure 3. Section View
Shows a typical section view to indicate positions and dimensions of the slab floor, the height of the roof, and the ceiling element.
