//package com.ssafy.cloneconverse.configuration.aspect;
//
//import org.aspectj.lang.ProceedingJoinPoint;
//import org.aspectj.lang.annotation.Around;
//import org.aspectj.lang.annotation.Aspect;
//import org.springframework.stereotype.Component;
//
//@Component
//@Aspect
//public class ServiceExceptionAspect {
//
//    @Around("execution(* com.ssafy.cloneconverse.service.*.*(..))")
//    public Object serviceExceptionHandler(ProceedingJoinPoint joinPoint) throws Throwable{
//        try{
//            return joinPoint.proceed();
//        }catch(Throwable e){
//            throw new RuntimeException(e);
//        }
//    }
//}
