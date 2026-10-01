-- Ex No: 5
-- Procedure

SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE Sum_Proc(a IN NUMBER, b IN NUMBER) IS
    c NUMBER;
BEGIN
    c := a + b;
    dbms_output.put_line('Sum of two nos = ' || c);
END Sum_Proc;
/

-- Function

CREATE OR REPLACE FUNCTION Sum_Func(a IN NUMBER, b IN NUMBER) 
RETURN NUMBER IS
    c NUMBER;
BEGIN
    c := a + b;
    RETURN c;
END;
/

-- Example calls:
-- EXEC Sum_Proc(10, 20);
-- SELECT Sum_Func(5, 5) FROM dual;
