import React from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

const CumulusClouds = (props: GroupProps) => {
    const gltf = useGLTF("/models/CumulusClouds.glb");
    const { nodes, materials } = gltf as unknown as THREE.Group & CumulusCloudsProps;

    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.group1132851814.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1876303778.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2007903775.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2082851372.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1529374326.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1634109569.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group867766821.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1075720932.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1986924141.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group798629208.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1259600516.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1190786076.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group314475369.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1953358191.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1673853470.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group583565501.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group275483851.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group499957928.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1561170386.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group438426712.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2024030423.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group523937103.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1057006343.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1840434272.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2104147704.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1395141760.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group874245234.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group419751930.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1251804279.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group156366063.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1328166467.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1326807654.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1933289215.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group988565495.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group182513310.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group17154742.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group319687905.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2083864030.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2061476718.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group613698311.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group694995317.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group692278875.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1550686136.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group838845542.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1894246885.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2018947006.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1825428956.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1361880110.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1976643361.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group561107919.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1106025126.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group332904801.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1834156268.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1054071867.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1320633921.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2104708810.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1775364818.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group609615062.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group255913402.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1380958169.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group234807330.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1221341015.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1887468593.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1015408960.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1355336708.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group579024241.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1275492136.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1992404665.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group540827141.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1048303940.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1492270228.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group324210468.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1659439555.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group604087941.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group89174768.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group90616166.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group478819560.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group741609680.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group499872682.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group410992384.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1163515377.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1709123739.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1017224445.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2113021315.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group697944911.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1113108510.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1094849050.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group241606109.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1200412614.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group781954137.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1879217866.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1041747425.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1756813671.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1176018300.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2078360644.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group838766250.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group154524453.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1955377303.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group459573868.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1992769196.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1830418222.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1999116334.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group246701220.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1191854180.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group834486203.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group410275742.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group589361260.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group635430692.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2074057079.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group658617798.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2105069814.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1859918490.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2049855987.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1042663894.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1733366613.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group819448248.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1471454445.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1154413423.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1953580909.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1131013661.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1923084899.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group810259022.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group163731270.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group158125161.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group517917161.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1476429248.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1765192838.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1637313082.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1881229670.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1207807073.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1866870219.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1871773943.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group45968944.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group450056017.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1886124717.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2136387817.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1715879779.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1345595368.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group703688719.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group561641257.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group499264325.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group879164224.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1285084877.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1939736867.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group527941606.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group988544972.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group615777811.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group933624363.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1319588413.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group708542748.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1097912630.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group376640924.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1728798703.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1718375440.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group601039840.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1092285513.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group741844486.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2017132021.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group921306404.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1791349244.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group415055919.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group691114758.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1864878285.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1178807948.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1740630271.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1744299560.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1571455358.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1505102517.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group543240391.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2070088493.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1754118849.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1745299923.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1641891388.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group510428233.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1870965563.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1741693514.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group435391001.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1769464535.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1405188759.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group990519218.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1323490128.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1958050237.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group920648178.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group180686525.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group166266599.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group514583299.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group573379851.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1534112785.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1427557361.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group61823079.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1608281053.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group92620366.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group199526734.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group804989986.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2138560393.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1846173271.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1943892270.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group783205382.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1571182288.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group477922731.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1110499421.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group201935467.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group605895662.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1327988820.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1795421303.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2132139418.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group297980845.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group765308523.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group996713535.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2110987268.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1069684402.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group873266887.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1418144298.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group604519226.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1421553859.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1928995579.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group898103839.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2128582299.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1300760526.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1678187869.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1871216857.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1971622463.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1945440496.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group154765527.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group440753503.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1757559636.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group28130149.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group607660112.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1597200663.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2139557140.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1440093399.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group470492176.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group137931711.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group103911017.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1103274589.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1769770595.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2084526795.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1197862824.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1998109496.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1526591187.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group765179218.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1806838428.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1112153489.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1086763107.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1990650588.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1196849509.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group574913280.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group101446262.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2034579315.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group747577672.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group57648515.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1979604823.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group274730276.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group298131784.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group688620967.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2126015089.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1625988563.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1645558707.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1554798739.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group533481938.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1846695145.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group2026878280.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1365741648.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1723379220.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1228459403.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group76558251.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1633648573.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1588688047.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group881197577.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group41431342.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group402234764.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group722894108.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group1632795983.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group728244105.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
            <mesh geometry={nodes.group27600855.geometry}>
                <meshStandardMaterial {...materials.mat21} transparent />
            </mesh>
        </group>
    );
};

export default CumulusClouds;

useGLTF.preload("/models/CumulusClouds.glb");

interface CumulusCloudsProps {
    nodes: {
        group1132851814: THREE.Mesh;
        group1876303778: THREE.Mesh;
        group2007903775: THREE.Mesh;
        group2082851372: THREE.Mesh;
        group1529374326: THREE.Mesh;
        group1634109569: THREE.Mesh;
        group867766821: THREE.Mesh;
        group1075720932: THREE.Mesh;
        group1986924141: THREE.Mesh;
        group798629208: THREE.Mesh;
        group1259600516: THREE.Mesh;
        group1190786076: THREE.Mesh;
        group314475369: THREE.Mesh;
        group1953358191: THREE.Mesh;
        group1673853470: THREE.Mesh;
        group583565501: THREE.Mesh;
        group275483851: THREE.Mesh;
        group499957928: THREE.Mesh;
        group1561170386: THREE.Mesh;
        group438426712: THREE.Mesh;
        group2024030423: THREE.Mesh;
        group523937103: THREE.Mesh;
        group1057006343: THREE.Mesh;
        group1840434272: THREE.Mesh;
        group2104147704: THREE.Mesh;
        group1395141760: THREE.Mesh;
        group874245234: THREE.Mesh;
        group419751930: THREE.Mesh;
        group1251804279: THREE.Mesh;
        group156366063: THREE.Mesh;
        group1328166467: THREE.Mesh;
        group1326807654: THREE.Mesh;
        group1933289215: THREE.Mesh;
        group988565495: THREE.Mesh;
        group182513310: THREE.Mesh;
        group17154742: THREE.Mesh;
        group319687905: THREE.Mesh;
        group2083864030: THREE.Mesh;
        group2061476718: THREE.Mesh;
        group613698311: THREE.Mesh;
        group694995317: THREE.Mesh;
        group692278875: THREE.Mesh;
        group1550686136: THREE.Mesh;
        group838845542: THREE.Mesh;
        group1894246885: THREE.Mesh;
        group2018947006: THREE.Mesh;
        group1825428956: THREE.Mesh;
        group1361880110: THREE.Mesh;
        group1976643361: THREE.Mesh;
        group561107919: THREE.Mesh;
        group1106025126: THREE.Mesh;
        group332904801: THREE.Mesh;
        group1834156268: THREE.Mesh;
        group1054071867: THREE.Mesh;
        group1320633921: THREE.Mesh;
        group2104708810: THREE.Mesh;
        group1775364818: THREE.Mesh;
        group609615062: THREE.Mesh;
        group255913402: THREE.Mesh;
        group1380958169: THREE.Mesh;
        group234807330: THREE.Mesh;
        group1221341015: THREE.Mesh;
        group1887468593: THREE.Mesh;
        group1015408960: THREE.Mesh;
        group1355336708: THREE.Mesh;
        group579024241: THREE.Mesh;
        group1275492136: THREE.Mesh;
        group1992404665: THREE.Mesh;
        group540827141: THREE.Mesh;
        group1048303940: THREE.Mesh;
        group1492270228: THREE.Mesh;
        group324210468: THREE.Mesh;
        group1659439555: THREE.Mesh;
        group604087941: THREE.Mesh;
        group89174768: THREE.Mesh;
        group90616166: THREE.Mesh;
        group478819560: THREE.Mesh;
        group741609680: THREE.Mesh;
        group499872682: THREE.Mesh;
        group410992384: THREE.Mesh;
        group1163515377: THREE.Mesh;
        group1709123739: THREE.Mesh;
        group1017224445: THREE.Mesh;
        group2113021315: THREE.Mesh;
        group697944911: THREE.Mesh;
        group1113108510: THREE.Mesh;
        group1094849050: THREE.Mesh;
        group241606109: THREE.Mesh;
        group1200412614: THREE.Mesh;
        group781954137: THREE.Mesh;
        group1879217866: THREE.Mesh;
        group1041747425: THREE.Mesh;
        group1756813671: THREE.Mesh;
        group1176018300: THREE.Mesh;
        group2078360644: THREE.Mesh;
        group838766250: THREE.Mesh;
        group154524453: THREE.Mesh;
        group1955377303: THREE.Mesh;
        group459573868: THREE.Mesh;
        group1992769196: THREE.Mesh;
        group1830418222: THREE.Mesh;
        group1999116334: THREE.Mesh;
        group246701220: THREE.Mesh;
        group1191854180: THREE.Mesh;
        group834486203: THREE.Mesh;
        group410275742: THREE.Mesh;
        group589361260: THREE.Mesh;
        group635430692: THREE.Mesh;
        group2074057079: THREE.Mesh;
        group658617798: THREE.Mesh;
        group2105069814: THREE.Mesh;
        group1859918490: THREE.Mesh;
        group2049855987: THREE.Mesh;
        group1042663894: THREE.Mesh;
        group1733366613: THREE.Mesh;
        group819448248: THREE.Mesh;
        group1471454445: THREE.Mesh;
        group1154413423: THREE.Mesh;
        group1953580909: THREE.Mesh;
        group1131013661: THREE.Mesh;
        group1923084899: THREE.Mesh;
        group810259022: THREE.Mesh;
        group163731270: THREE.Mesh;
        group158125161: THREE.Mesh;
        group517917161: THREE.Mesh;
        group1476429248: THREE.Mesh;
        group1765192838: THREE.Mesh;
        group1637313082: THREE.Mesh;
        group1881229670: THREE.Mesh;
        group1207807073: THREE.Mesh;
        group1866870219: THREE.Mesh;
        group1871773943: THREE.Mesh;
        group45968944: THREE.Mesh;
        group450056017: THREE.Mesh;
        group1886124717: THREE.Mesh;
        group2136387817: THREE.Mesh;
        group1715879779: THREE.Mesh;
        group1345595368: THREE.Mesh;
        group703688719: THREE.Mesh;
        group561641257: THREE.Mesh;
        group499264325: THREE.Mesh;
        group879164224: THREE.Mesh;
        group1285084877: THREE.Mesh;
        group1939736867: THREE.Mesh;
        group527941606: THREE.Mesh;
        group988544972: THREE.Mesh;
        group615777811: THREE.Mesh;
        group933624363: THREE.Mesh;
        group1319588413: THREE.Mesh;
        group708542748: THREE.Mesh;
        group1097912630: THREE.Mesh;
        group376640924: THREE.Mesh;
        group1728798703: THREE.Mesh;
        group1718375440: THREE.Mesh;
        group601039840: THREE.Mesh;
        group1092285513: THREE.Mesh;
        group741844486: THREE.Mesh;
        group2017132021: THREE.Mesh;
        group921306404: THREE.Mesh;
        group1791349244: THREE.Mesh;
        group415055919: THREE.Mesh;
        group691114758: THREE.Mesh;
        group1864878285: THREE.Mesh;
        group1178807948: THREE.Mesh;
        group1740630271: THREE.Mesh;
        group1744299560: THREE.Mesh;
        group1571455358: THREE.Mesh;
        group1505102517: THREE.Mesh;
        group543240391: THREE.Mesh;
        group2070088493: THREE.Mesh;
        group1754118849: THREE.Mesh;
        group1745299923: THREE.Mesh;
        group1641891388: THREE.Mesh;
        group510428233: THREE.Mesh;
        group1870965563: THREE.Mesh;
        group1741693514: THREE.Mesh;
        group435391001: THREE.Mesh;
        group1769464535: THREE.Mesh;
        group1405188759: THREE.Mesh;
        group990519218: THREE.Mesh;
        group1323490128: THREE.Mesh;
        group1958050237: THREE.Mesh;
        group920648178: THREE.Mesh;
        group180686525: THREE.Mesh;
        group166266599: THREE.Mesh;
        group514583299: THREE.Mesh;
        group573379851: THREE.Mesh;
        group1534112785: THREE.Mesh;
        group1427557361: THREE.Mesh;
        group61823079: THREE.Mesh;
        group1608281053: THREE.Mesh;
        group92620366: THREE.Mesh;
        group199526734: THREE.Mesh;
        group804989986: THREE.Mesh;
        group2138560393: THREE.Mesh;
        group1846173271: THREE.Mesh;
        group1943892270: THREE.Mesh;
        group783205382: THREE.Mesh;
        group1571182288: THREE.Mesh;
        group477922731: THREE.Mesh;
        group1110499421: THREE.Mesh;
        group201935467: THREE.Mesh;
        group605895662: THREE.Mesh;
        group1327988820: THREE.Mesh;
        group1795421303: THREE.Mesh;
        group2132139418: THREE.Mesh;
        group297980845: THREE.Mesh;
        group765308523: THREE.Mesh;
        group996713535: THREE.Mesh;
        group2110987268: THREE.Mesh;
        group1069684402: THREE.Mesh;
        group873266887: THREE.Mesh;
        group1418144298: THREE.Mesh;
        group604519226: THREE.Mesh;
        group1421553859: THREE.Mesh;
        group1928995579: THREE.Mesh;
        group898103839: THREE.Mesh;
        group2128582299: THREE.Mesh;
        group1300760526: THREE.Mesh;
        group1678187869: THREE.Mesh;
        group1871216857: THREE.Mesh;
        group1971622463: THREE.Mesh;
        group1945440496: THREE.Mesh;
        group154765527: THREE.Mesh;
        group440753503: THREE.Mesh;
        group1757559636: THREE.Mesh;
        group28130149: THREE.Mesh;
        group607660112: THREE.Mesh;
        group1597200663: THREE.Mesh;
        group2139557140: THREE.Mesh;
        group1440093399: THREE.Mesh;
        group470492176: THREE.Mesh;
        group137931711: THREE.Mesh;
        group103911017: THREE.Mesh;
        group1103274589: THREE.Mesh;
        group1769770595: THREE.Mesh;
        group2084526795: THREE.Mesh;
        group1197862824: THREE.Mesh;
        group1998109496: THREE.Mesh;
        group1526591187: THREE.Mesh;
        group765179218: THREE.Mesh;
        group1806838428: THREE.Mesh;
        group1112153489: THREE.Mesh;
        group1086763107: THREE.Mesh;
        group1990650588: THREE.Mesh;
        group1196849509: THREE.Mesh;
        group574913280: THREE.Mesh;
        group101446262: THREE.Mesh;
        group2034579315: THREE.Mesh;
        group747577672: THREE.Mesh;
        group57648515: THREE.Mesh;
        group1979604823: THREE.Mesh;
        group274730276: THREE.Mesh;
        group298131784: THREE.Mesh;
        group688620967: THREE.Mesh;
        group2126015089: THREE.Mesh;
        group1625988563: THREE.Mesh;
        group1645558707: THREE.Mesh;
        group1554798739: THREE.Mesh;
        group533481938: THREE.Mesh;
        group1846695145: THREE.Mesh;
        group2026878280: THREE.Mesh;
        group1365741648: THREE.Mesh;
        group1723379220: THREE.Mesh;
        group1228459403: THREE.Mesh;
        group76558251: THREE.Mesh;
        group1633648573: THREE.Mesh;
        group1588688047: THREE.Mesh;
        group881197577: THREE.Mesh;
        group41431342: THREE.Mesh;
        group402234764: THREE.Mesh;
        group722894108: THREE.Mesh;
        group1632795983: THREE.Mesh;
        group728244105: THREE.Mesh;
        group27600855: THREE.Mesh;
    };

    materials: {
        mat21: THREE.MeshStandardMaterial;
    };
}
